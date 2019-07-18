import { Component } from '@angular/core';

@Component({
  selector: 'layout-grid-with-sidebar',
//   styleUrls: ['./header.component.scss'],
  template: '<page-header></page-header><div>Sidebar</div><ng-content select="router-outlet"></ng-content><page-footer></page-footer>',
})
export class GridWithSidebarComponent {}
