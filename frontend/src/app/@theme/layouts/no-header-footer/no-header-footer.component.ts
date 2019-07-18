import { Component } from '@angular/core';

@Component({
  selector: 'layout-no-header-footer',
//   styleUrls: ['./header.component.scss'],
  template: '<ng-content select="router-outlet"></ng-content>',
})
export class NoHeaderFooterComponent {}
