import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

import { AlertConfig } from './alert.config';

@Component({
  selector: '.alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
    <button *ngIf="dismissible" type="button" class="close" aria-label="Close" (click)="closeHandler()">
      <span aria-hidden="true">&times;</span>
    </button>
    `,
  host: {
    role: 'alert',
    '[class.alert-dismissible]': 'dismissible'
  },
  styleUrls: ['./alert.scss']
})

export class AlertComponent implements OnInit, OnChanges {

  @Input() dismissible: boolean;
  @Input() type: string;
  @Output() close = new EventEmitter<void>();

  constructor(
    config: AlertConfig,
    private _renderer: Renderer2,
    private _element: ElementRef
  ) {}

  closeHandler() { this.close.emit(null); }

  ngOnChanges(changes: SimpleChanges) {
    const typeChange = changes['type'];
    if (typeChange && !typeChange.firstChange) {
      this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);
      this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
    }
  }

  ngOnInit() {
    this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`);
  }
}
