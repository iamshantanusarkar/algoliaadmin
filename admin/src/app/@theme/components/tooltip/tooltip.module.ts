import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';

export { TooltipComponent } from './tooltip.component';
export { TooltipConfig } from './tooltip.config';

@NgModule({
  declarations: [ TooltipComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipComponent
  ]
})
export class TooltipModule { }
