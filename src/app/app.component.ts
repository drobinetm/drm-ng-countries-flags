import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'drm-ng-countries-flags';
  filter = ['es', 'br', 'ar', 'uy', 'us', 'gb'];
  max = 4;
}
