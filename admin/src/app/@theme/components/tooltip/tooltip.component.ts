import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  Inject,
  Injector,
  Renderer2,
  ComponentRef,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone,
  ViewEncapsulation,
  ChangeDetectorRef,
  ApplicationRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { listenToTriggers } from '../utility/triggers';
import { AutoClose } from '../utility/autoclose';
import { positionElements, PlacementArray } from '../utility/positioning';
import { PopupService } from '../utility/popup';

import { TooltipConfig } from './tooltip.config';

let nextId = 0;

@Component({
  selector: 'tooltip-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")', 'role': 'tooltip', '[id]': 'id'},
  template: `<div class="arrow"></div><div class="tooltip-inner"><ng-content></ng-content></div>`,
  styleUrls: ['./tooltip.scss']
})
export class TooltipWindow {
  @Input() id: string;
  @Input() tooltipClass: string;
}

@Directive({selector: '[Tooltip]', exportAs: 'ThmTooltip'})
export class TooltipComponent implements OnInit, OnDestroy {

  @Input() autoClose: boolean | 'inside' | 'outside';
  @Input() placement: PlacementArray;
  @Input() triggers: string;
  @Input() container: string;
  @Input() disableTooltip: boolean;
  @Input() tooltipClass: string;
  @Input() openDelay: number;
  @Input() closeDelay: number;
  @Output() shown = new EventEmitter();
  @Output() hidden = new EventEmitter();

  private _Tooltip: string | TemplateRef<any>;
  private _TooltipWindowId = `tooltip-${nextId++}`;
  private _popupService: PopupService<TooltipWindow>;
  private _windowRef: ComponentRef<TooltipWindow>;
  private _unregisterListenersFn;
  private _zoneSubscription: any;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _renderer: Renderer2,
    injector: Injector,
    componentFactoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef,
    config: TooltipConfig,
    private _ngZone: NgZone,
    @Inject(DOCUMENT) private _document: any,
    private _changeDetector: ChangeDetectorRef,
    private _applicationRef: ApplicationRef
  ) {
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disableTooltip = config.disableTooltip;
    this.tooltipClass = config.tooltipClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService<TooltipWindow>(
        TooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);

    this._zoneSubscription = _ngZone.onStable.subscribe(() => {
      if (this._windowRef) {
        positionElements(
            this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement,
            this.container === 'body', 'bs-tooltip');
      }
    });
  }

  @Input()
  set Tooltip(value: string | TemplateRef<any>) {
    this._Tooltip = value;
    if (!value && this._windowRef) {
      this.close();
    }
  }

  get Tooltip() { return this._Tooltip; }

  open(context?: any) {
    if (!this._windowRef && this._Tooltip && !this.disableTooltip) {
      this._windowRef = this._popupService.open(this._Tooltip, context);
      this._windowRef.instance.tooltipClass = this.tooltipClass;
      this._windowRef.instance.id = this._TooltipWindowId;

      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._TooltipWindowId);

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      }

      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();

      AutoClose(
          this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden,
          [this._windowRef.location.nativeElement]);

      this.shown.emit();
    }
  }

  close(): void {
    if (this._windowRef != null) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      this._popupService.close();
      this._windowRef = null;
      this.hidden.emit();
      this._changeDetector.markForCheck();
    }
  }

  toggle(): void {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }

  isOpen(): boolean { return this._windowRef != null; }

  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(
        this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this),
        this.close.bind(this), +this.openDelay, +this.closeDelay);
  }

  ngOnDestroy() {
    this.close();
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
    this._zoneSubscription.unsubscribe();
  }
}
