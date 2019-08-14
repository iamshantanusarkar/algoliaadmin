import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: '', component: GlobalSettingsComponent },
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
