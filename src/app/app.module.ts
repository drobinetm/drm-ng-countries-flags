import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMatDrmCountriesFlagsModule} from '../../projects/ngx-mat-drm-countries-flags/src/lib/ngx-mat-drm-countries-flags.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatDrmCountriesFlagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
