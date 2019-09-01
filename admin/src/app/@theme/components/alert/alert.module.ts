import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';

export { AlertComponent } from './alert.component';
export { AlertConfig } from './alert.config';

@NgModule({
  declarations: [ AlertComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
