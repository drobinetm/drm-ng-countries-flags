import {Injectable} from '@angular/core';
import {Countries} from './models/Country';

@Injectable({
  providedIn: 'root'
})
export class NgxMatDrmCountriesFlagsService {
  private $countries: Countries;
  private $max: number;
  private $filter: string[];

  constructor() {
    this.$countries = new Countries();
  }

  set Max(max: number) {
    this.$max = max;
  }

  set Filter(filter: string[]) {
    this.$filter = filter;
  }

  listCountries() {
    return this.$countries.allCountriesIso(this.$max, this.$filter);
  }
}

