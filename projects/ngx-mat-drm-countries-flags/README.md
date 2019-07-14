<h1 align="center">
  <br>
  <img src="https://github.com/drobinetm/drm-ng-countries-flags/blob/master/src/assets/countries-flags.png" alt="ngx-mat-drm-countries-flags">
  <br>
</h1>

<p align="center">
  <a href="https://badge.fury.io/js/ngx-mat-drm-countries-flags">
    <img src="https://badge.fury.io/js/ngx-mat-drm-countries-flags.svg" alt="npm version">
  </a>
  <a href="https://badge.fury.io/gh/drobinetm%2Fdrm-ng-countries-flags">
    <img src="https://badge.fury.io/gh/drobinetm%2Fdrm-ng-countries-flags.svg" alt="git version">
  </a>
</p>

# Angular Select Countries with flags

<table>
  <tr>
    <td>  
      Angular library to list the countries and their flags in a selection component.
    </td>
  </tr>
</table>

## Dependecies

* [@angular/cdk: "^7.3.7"](#)   
* [@angular/material: "^7.3.7"](https://www.npmjs.com/package/@angular/material)
* [country-list: "^2.1.1"](#)
* [flag-icon-css: "^3.3.0"](https://www.npmjs.com/package/flag-icon-css)

## How to Use

1. Install through npm:
```bash
# Install dependencies
$ npm install @angular/cdk@^7.3.7
$ npm install @angular/material@^7.3.7
$ npm install country-list@^2.1.1
$ npm install flag-icon-css@^3.3.0
# Install library
$ npm install --save ngx-mat-drm-countries-flags
```
2. Next config dependencies:
* Include BrowserModule and BrowserAnimationsModule into your app's module:
 ```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule
   ]
})
export class MyModule {}
```
* Include material theme and flag icon css into your angular.json:
```jsmin 
{
  "styles" : [
      "node_modules/@angular/material/prebuilt-themes/indigo-pink.css", //Optional
      "node_modules/flag-icon-css/css/flag-icon.min.css",
      "src/styles.sass"
  ]
}
```
3. Now import the countries flags module into your app's module:
```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMatDrmCountriesFlagsModule} from 'ngx-mat-drm-countries-flags';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatDrmCountriesFlagsModule
   ]
})
export class MyModule {}
```
4. Finally connect the select countries flag via a template property:
```angular2html
<ngx-countries-flags></ngx-countries-flags>
```

## Development

### Prepare your environment

Install local dev dependencies: `npm install` while current directory is this repo.
 
### Development server

Run `npm start` to start a development server on a port 4200.

Open `http//:localhost:4200` on your browser.

## Tests

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## License

MIT
