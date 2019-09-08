import {
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';

import { TooltipConfig } from './tooltip.config';

@Component({
  selector: '[data-tooltip]',
  template: `<span>Tooltip</span>`,
  host: {
    role: 'tooltip',
  },
  styleUrls: ['./tooltip.scss']
})

export class TooltipComponent implements OnInit, OnChanges {

  constructor(
    config: TooltipConfig,
    // private _renderer: Renderer2,
    // private _element: ElementRef
  ) {}

  //closeHandler() { this.close.emit(null); }

  ngOnChanges() {
    // const typeChange = changes['type'];
    // if (typeChange && !typeChange.firstChange) {
    //   this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);
    //   this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
    // }
  }

  ngOnInit() {
    // this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`);
  }
}
