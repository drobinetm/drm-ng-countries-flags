import {Component, OnInit} from '@angular/core';
import {Country, Countries} from './models/Country';

@Component({
  selector: 'ngx-countries-flags',
  templateUrl: './ngx-mat-drm-countries-flags.component.html',
  styleUrls: ['./ngx-mat-drm-countries-flags.component.sass']
})
export class NgxMatDrmCountriesFlagsComponent implements OnInit {
  public listCountries: Country[] = [];
  private countries: Countries = new Countries();

  constructor() {
  }

  ngOnInit() {
    this.listCountries = this.countries.allCountriesIso();
  }
}
