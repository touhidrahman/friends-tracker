import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-friend-tracking-status',
  templateUrl: './friend-tracking-status.component.html',
  styleUrls: ['./friend-tracking-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendTrackingStatusComponent {
  @Input() tracking = false;
  @Input() loading = false;

  @Output() toggle = new EventEmitter<boolean>();

  toggleTracking() {
    this.toggle.emit(!this.tracking);
  }
}
