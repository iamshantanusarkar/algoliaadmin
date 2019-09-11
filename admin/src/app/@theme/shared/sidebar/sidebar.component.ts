import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { NavItem } from '../../../_models/navItem';

@Component({
  selector: 'page-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit {

  //@ViewChild('appDrawer') appDrawer: ElementRef;

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
          iconName: 'none',
          route: 'report/order',
        },
        {
          displayName: 'Customer Report',
          iconName: 'none',
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
          iconName: 'group',
        },
        {
          displayName: 'Role',
          iconName: 'group',
        },
        {
          displayName: 'Group',
          iconName: 'group',
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
