import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { NavItem } from '@/_models/navItem';
import { NavService } from '@/_services/Navservice';

@Component({
  selector: '.thm-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('indicatorRotate', [
      state('open', style({transform: 'rotate(0deg)'})),
      state('close', style({transform: 'rotate(90deg)'})),
      transition('open <=> close',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})

export class MenuListItemComponent implements OnInit {

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(
    public navService: NavService,
    public router: Router
  ) { }

  ngOnInit() {}

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
