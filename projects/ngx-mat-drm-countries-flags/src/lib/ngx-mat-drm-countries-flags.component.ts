import {Component, Input, OnInit} from '@angular/core';
import {Country} from './models/Country';
import {NgxMatDrmCountriesFlagsService} from './ngx-mat-drm-countries-flags.service';

@Component({
  selector: 'ngx-countries-flags',
  templateUrl: './ngx-mat-drm-countries-flags.component.html',
  styleUrls: ['./ngx-mat-drm-countries-flags.component.sass']
})
export class NgxMatDrmCountriesFlagsComponent implements OnInit {
  public listCountries: Country[] = [];

  @Input() public max: number = 0;
  //@Input() public filter: string[] = [];

  constructor(private ngxMatCountriesFlags: NgxMatDrmCountriesFlagsService) {
  }

  ngOnInit() {
    this.ngxMatCountriesFlags.Max = this.max;
    //this.ngxMatCountriesFlags.Filter = this.filter;
    this.listCountries = this.ngxMatCountriesFlags.listCountries();
  }
}
