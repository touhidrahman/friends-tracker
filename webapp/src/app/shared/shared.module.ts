import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PaginationSimpleComponent } from './pagination-simple/pagination-simple.component';

@NgModule({
  declarations: [PaginationSimpleComponent],
  exports: [PaginationSimpleComponent],
  imports: [CoreModule],
})
export class SharedModule {}
