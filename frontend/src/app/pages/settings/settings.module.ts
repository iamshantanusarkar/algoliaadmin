import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { GlobalSettingsDetailsComponent } from './global-settings/global-settings-details/global-settings-details.component';
import { GlobalSettingsListComponent } from './global-settings/global-settings-list/global-settings-list.component';
import { GlobalSettingsCreateComponent } from './global-settings/global-settings-create/global-settings-create.component';
import { GlobalSettingsUpdateComponent } from './global-settings/global-settings-update/global-settings-update.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        SettingsComponent,
        GlobalSettingsComponent,
        GlobalSettingsDetailsComponent,
        GlobalSettingsListComponent,
        GlobalSettingsCreateComponent,
        GlobalSettingsUpdateComponent,
        AccountSettingsComponent,
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        ReactiveFormsModule
    ]
})

export class SettingsModule { }
