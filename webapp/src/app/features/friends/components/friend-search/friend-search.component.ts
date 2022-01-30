import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendSearchComponent {

  @Output() searchTermChange = new EventEmitter<string>()

  search = ''

  emitSearchTerm(): void {
    this.searchTermChange.emit(this.search)
  }

}
