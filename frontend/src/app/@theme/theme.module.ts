import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FooterComponent,
    HeaderComponent
} from './components';

import {
    GridWithSidebarComponent,
    GridWithoutSidebarComponent,
    NoHeaderFooterComponent
} from './layouts';

const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    GridWithSidebarComponent,
    GridWithoutSidebarComponent,
    NoHeaderFooterComponent
];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        CommonModule,
    ],
    exports: [ ...COMPONENTS ],
    providers: [],
    bootstrap: []
})
export class ThemeModule { }
