import { Injectable } from '@angular/core';
import { PlacementArray } from '../utility/positioning';

@Injectable({providedIn: 'root'})
export class DropdownConfig {
  autoClose: boolean | 'outside' | 'inside' = true;
  placement: PlacementArray = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
  container: null | 'body';
}
