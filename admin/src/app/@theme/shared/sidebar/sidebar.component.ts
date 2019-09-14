import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { NavItem } from '@/_models/navItem';

@Component({
  selector: '.thm-aside',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit {

  // @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [{
      displayName: 'Dashboard',
      iconName: 'iconslayers',
      route: 'dashboard',
    },
    {
      displayName: 'Reports',
      iconName: 'iconsbook-open',
      children: [
        {
          displayName: 'Order Report',
          route: 'report/order',
        },
        {
          displayName: 'Customer Report',
          route: 'report/customer',
        }
      ]
    },
    {
      displayName: 'Administration',
      itemType: 'Section',
      iconName: 'none',
    },
    {
      displayName: 'User Management',
      iconName: 'iconsusers',
      children: [
        {
          displayName: 'User',
        },
        {
          displayName: 'Role',
        },
        {
          displayName: 'Group',
        }
      ]
    },
    {
      displayName: 'Settings',
      iconName: 'iconssettings',
      route: 'settings',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
