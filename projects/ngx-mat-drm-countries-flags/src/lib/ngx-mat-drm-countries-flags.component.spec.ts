import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDrmCountriesFlagsComponent } from './ngx-mat-drm-countries-flags.component';

describe('NgxMatDrmCountriesFlagsComponent', () => {
  let component: NgxMatDrmCountriesFlagsComponent;
  let fixture: ComponentFixture<NgxMatDrmCountriesFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatDrmCountriesFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatDrmCountriesFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
