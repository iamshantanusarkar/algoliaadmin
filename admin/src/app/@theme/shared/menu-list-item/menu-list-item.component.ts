import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../../../_models/navItem';
import { NavService } from '../../../_services/Navservice';

@Component({
  selector: 'menu-list-item',
  templateUrl: './menu-list-item.component.html'
})

export class MenuListItemComponent implements OnInit {
    @Input() item: NavItem;
    @Input() depth: number;

  constructor(
      public navService: NavService
  ) { }

  ngOnInit() {

  }

}
