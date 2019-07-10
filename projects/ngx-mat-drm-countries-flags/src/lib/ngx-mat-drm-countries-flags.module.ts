import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {NgxMatDrmCountriesFlagsComponent} from './ngx-mat-drm-countries-flags.component';

@NgModule({
  declarations: [NgxMatDrmCountriesFlagsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [NgxMatDrmCountriesFlagsComponent]
})
export class NgxMatDrmCountriesFlagsModule {
}
