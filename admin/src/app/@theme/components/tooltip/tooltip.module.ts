import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent, TooltipWindow } from './tooltip.component';

export { TooltipComponent } from './tooltip.component';
export { TooltipConfig } from './tooltip.config';
export { Placement } from '../utility/positioning';

@NgModule({
  declarations: [ TooltipComponent, TooltipWindow ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipComponent
  ],
  entryComponents: [TooltipWindow]
})
export class TooltipModule { }
