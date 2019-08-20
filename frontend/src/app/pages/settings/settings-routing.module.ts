import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { GlobalSettingsListComponent } from './global-settings/global-settings-list/global-settings-list.component';
import { GlobalSettingsDetailsComponent } from './global-settings/global-settings-details/global-settings-details.component';
import { GlobalSettingsCreateComponent } from './global-settings/global-settings-create/global-settings-create.component';
import { GlobalSettingsUpdateComponent } from './global-settings/global-settings-update/global-settings-update.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: 'list', component: GlobalSettingsListComponent },
            { path: 'view/:id', component: GlobalSettingsDetailsComponent },
            { path: 'create', component: GlobalSettingsCreateComponent },
            { path: 'edit/:id', component: GlobalSettingsUpdateComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            // { path: '', redirectTo: 'global-settings', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SettingsRoutingModule { }
