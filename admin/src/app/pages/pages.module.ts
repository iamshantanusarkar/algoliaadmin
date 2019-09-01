import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

import { SettingsModule } from './settings/settings.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    SettingsModule,
    ReportsModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
