import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutLoadingComponent } from './components/layout-loading/layout-loading.component';
import { NavbarDefaultComponent } from './components/navbar-default/navbar-default.component';

@NgModule({
  declarations: [
    NavbarDefaultComponent,
    LayoutLoadingComponent,
  ],
  imports: [CoreModule],
  exports: [
    NavbarDefaultComponent,
    LayoutLoadingComponent,
  ],
})
export class LayoutModule {}
