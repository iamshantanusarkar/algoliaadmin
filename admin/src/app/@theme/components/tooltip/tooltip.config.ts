import { Injectable } from '@angular/core';
import { PlacementArray } from '../utility/positioning';

@Injectable({providedIn: 'root'})
export class TooltipConfig {
  autoClose: boolean | 'inside' | 'outside' = true;
  placement: PlacementArray = 'auto';
  triggers = 'hover focus';
  container: string;
  disableTooltip = false;
  tooltipClass: string;
  openDelay = 0;
  closeDelay = 0;
}
