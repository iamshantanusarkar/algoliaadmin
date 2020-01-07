import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AccordianModule,
  AlertModule,
  CarouselModule,
  DatatableModule,
  DropdownModule,
  ModalModule,
  PopoverModule,
  ToastModule,
  TooltipModule
} from './components';

import {
  LayoutGridWithSidebar,
  LayoutGridWithoutSidebar,
  LayoutGridNoHeaderFooter
} from './layouts';

import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  MenuListItemComponent
} from './shared';

const COMPONENTS = [
  // AccordianModule,
  AlertModule,
  // CarouselModule,
  DatatableModule,
  DropdownModule,
  // ModalModule,
  // PopoverModule,
  // ToastModule,
  TooltipModule
];

const LAYOUTS = [
  LayoutGridWithSidebar,
  LayoutGridWithoutSidebar,
  LayoutGridNoHeaderFooter
];

const SHARED = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  MenuListItemComponent
];

@NgModule({
  declarations: [
    ...LAYOUTS,
    ...SHARED
   ],
  imports: [
    CommonModule,
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
    ...LAYOUTS
  ],
  providers: [],
  bootstrap: []
})
export class ThemeModule { }
