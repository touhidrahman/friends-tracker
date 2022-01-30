import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getPagination } from '@core/utils/pagination.util';
import { Friend } from '@features/friends/models/friend';
import { FriendApiService } from '@features/friends/services/friend-api.service';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  EMPTY,
  interval,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  friends = new BehaviorSubject<Friend[]>([]);
  polling = new BehaviorSubject<boolean>(false);
  loading = new BehaviorSubject<boolean>(false);
  page = new BehaviorSubject<number>(1);
  search = new BehaviorSubject<string>('');

  private destroyed = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: FriendApiService,
    private router: Router
  ) {
    this.init();
    this.poll();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: ({ search = '', page = 1 }) => {
        this.search.next(search);
        const pageNumber = getPagination(page);
        this.page.next(pageNumber);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  goToPage(factor: 1 | -1): void {
    const page = this.page.value + factor;
    this.router.navigate(['./'], {
      queryParams: { page: getPagination(page) },
      queryParamsHandling: 'merge',
    });
  }

  updateSearch(term: string): void {
    // when we are searching, also reset the page to 0
    this.router.navigate(['./'], {
      queryParams: { search: term, page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  private init() {
    //load initial friends and respond to page no & search term changes
    combineLatest({
      page: this.page.asObservable(),
      search: this.search.asObservable(),
    })
      .pipe(
        debounceTime(300),
        tap(() => this.loading.next(true)),
        switchMap(({ page, search }) => this.api.getFriends(search, page)),
        takeUntil(this.destroyed)
      )
      .subscribe({
        next: (friends) => {
          this.friends.next(friends);
          this.loading.next(false);
          this.polling.next(true); // start polling
        },
      });
  }

  private poll() {
    // poll every 5 seconds for location change
    const interval$ = this.polling
      .asObservable()
      .pipe(switchMap((isPolling) => (isPolling ? interval(5000) : EMPTY)));

    interval$
      .pipe(
        tap(() => this.loading.next(true)),
        switchMap(() =>
          this.api.getFriends(this.search.value, this.page.value)
        ),
        takeUntil(this.destroyed)
      )
      .subscribe({
        next: (friends) => {
          this.friends.next(friends);
          this.loading.next(false);
        },
      });
  }

}
