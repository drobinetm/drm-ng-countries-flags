# Angular Select Countries with flags
Angular library to list the countries and their flags in a selection component.

Install through npm:
```angular2html
npm install --save ngx-mat-drm-countries-flags
```
Next import the countries flags module into your app's module:
```typescript
import {NgModule} from '@angular/core';
import {NgxMatDrmCountriesFlagsModule} from 'ngx-mat-drm-countries-flags';

@NgModule({
  imports: [NgxMatDrmCountriesFlagsModule]
})
export class MyModule {}
```
Finally connect the select countries flag via a template property:
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
