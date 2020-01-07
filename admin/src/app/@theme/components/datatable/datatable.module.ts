import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatableComponent } from './datatable.component';

export { DatatableComponent } from './datatable.component';
export { DatatableConfig } from './datatable.config';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
