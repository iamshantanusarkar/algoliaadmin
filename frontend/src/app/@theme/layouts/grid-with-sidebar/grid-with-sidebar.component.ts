import { Component } from '@angular/core';

@Component({
  selector: '[layout-grid-with-sidebar]',
  template: '<page-header></page-header><div>Sidebar</div><ng-content select="router-outlet"></ng-content><page-footer></page-footer>',
})
export class GridWithSidebarComponent {}
