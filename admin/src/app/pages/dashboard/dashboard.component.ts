import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentCanDeactivate } from '@/_guards/pending-changes.guard';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: '.dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, ComponentCanDeactivate {

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return true;
  }

  closed = false;

  constructor() { }

  ngOnInit() {

  }

}
