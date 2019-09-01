import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AlertConfig {
  dismissible = true;
  type = 'warning';
}
