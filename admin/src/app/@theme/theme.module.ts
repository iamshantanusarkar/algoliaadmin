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

const MODULES = [
  AccordianModule,
  AlertModule,
  CarouselModule,
  DatatableModule,
  DropdownModule,
  ModalModule,
  PopoverModule,
  ToastModule,
  TooltipModule
];

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  providers: [],
  bootstrap: []
})
export class ThemeModule { }
