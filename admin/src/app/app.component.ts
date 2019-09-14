import {
  Component,
  OnInit,
  NgZone,
  Renderer,
  ElementRef,
  ViewChild,
} from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
    selector: '#admin-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('spinnerElement', {static: false})
  spinnerElement: ElementRef;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.ngZone.runOutsideAngular(() => {
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'display',
          'block'
        );
      });
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }
    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'display',
        'none'
      );
    });
  }

  ngOnInit() {}
}
