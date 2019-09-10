import { UserManagementRoutingModule } from './user-management/user-management-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
      }, {
        path: 'report',
        loadChildren: () => import('./reports/reports.module').then(mod => mod.ReportsModule)
      }, {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
