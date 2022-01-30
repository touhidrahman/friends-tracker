import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Friend } from '@features/friends/models/friend';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent {
  @Input() friend: Friend | null = null;
}
