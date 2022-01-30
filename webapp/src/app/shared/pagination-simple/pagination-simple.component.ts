import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination-simple',
  templateUrl: './pagination-simple.component.html',
  styleUrls: ['./pagination-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationSimpleComponent {
  @Input() currentPage = 0;

  @Output() nextClick = new EventEmitter<void>();
  @Output() prevClick = new EventEmitter<void>();
}
