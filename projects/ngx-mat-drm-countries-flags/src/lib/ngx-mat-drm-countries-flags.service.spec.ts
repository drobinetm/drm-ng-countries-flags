import { TestBed } from '@angular/core/testing';

import { NgxMatDrmCountriesFlagsService } from './ngx-mat-drm-countries-flags.service';

describe('NgxMatDrmCountriesFlagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatDrmCountriesFlagsService = TestBed.get(NgxMatDrmCountriesFlagsService);
    expect(service).toBeTruthy();
  });
});
