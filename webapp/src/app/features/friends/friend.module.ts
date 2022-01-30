import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendMapComponent } from './components/friend-map/friend-map.component';
import { FriendSearchComponent } from './components/friend-search/friend-search.component';
import { FriendTrackingStatusComponent } from './components/friend-tracking-status/friend-tracking-status.component';

@NgModule({
  declarations: [
    FriendCardComponent,
    FriendSearchComponent,
    FriendMapComponent,
    FriendTrackingStatusComponent
  ],
  imports: [CoreModule],
  exports: [
    FriendCardComponent,
    FriendSearchComponent,
    FriendMapComponent,
    FriendTrackingStatusComponent
  ],
})
export class FriendModule {}
