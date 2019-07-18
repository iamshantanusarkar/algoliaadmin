import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';
import { SettingsModule } from './settings/settings.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';


import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        NotFoundComponent
    ],
    imports: [
        ThemeModule,
        SettingsModule,
        PagesRoutingModule,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }
