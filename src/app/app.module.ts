import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMatDrmCountriesFlagsModule} from 'ngx-mat-drm-countries-flags';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxMatDrmCountriesFlagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
