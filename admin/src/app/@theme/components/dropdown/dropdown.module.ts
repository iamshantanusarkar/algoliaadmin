import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Dropdown,
  DropdownAnchor,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ThmNavbar
} from './dropdown.component';

export { Dropdown, DropdownAnchor, DropdownToggle, DropdownMenu, DropdownItem } from './dropdown.component';
export { DropdownConfig } from './dropdown-config';

const DROPDOWN_DIRECTIVES =
    [Dropdown, DropdownAnchor, DropdownToggle, DropdownMenu, DropdownItem, ThmNavbar];


@NgModule({
  declarations: DROPDOWN_DIRECTIVES,
  imports: [
    CommonModule
  ],
  exports: DROPDOWN_DIRECTIVES
})
export class DropdownModule { }
