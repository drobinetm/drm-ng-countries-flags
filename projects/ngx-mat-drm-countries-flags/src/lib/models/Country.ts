export interface Country {
  name: string;
  code: string;
}

export class Countries {
  countryList: any;

  constructor() {
    this.countryList = require('country-list');
  }

  allCountriesIso(max: number, filter: string[]) {
    let allCountries = this.countryList.getData();

    if (filter.length > 0) {
      allCountries = allCountries.filter(v => filter.indexOf(v.code.toLowerCase()) !== -1);
    }

    if (max > 0) {
      allCountries = allCountries.slice(0, max);
    }

    return allCountries.map(v => Object({
      code: v.code.toLowerCase(),
      name: v.name
    }));
  }
}
