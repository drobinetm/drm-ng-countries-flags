export interface Country {
  name: string;
  code: string;
}

export class Countries {
  countryList: any;

  constructor() {
    this.countryList = require('country-list');
  }

  allCountriesIso() {
    return this.countryList.getData().map(v => Object({
      code: v.code.toLowerCase(),
      name: v.name
    }));
  }
}
