import { Component } from '@angular/core';

@Component({
  selector: 'layout-grid-without-sidebar',
//   styleUrls: ['./header.component.scss'],
  template: '<page-header></page-header><ng-content select="router-outlet"></ng-content><page-footer></page-footer>',
})
export class GridWithoutSidebarComponent {}
