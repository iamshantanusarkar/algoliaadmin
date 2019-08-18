import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';
import { GlobalSettingsComponent, GlobalSettingsViewComponent } from './global-settings/global-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    declarations: [
        SettingsComponent,
        GlobalSettingsComponent,
        AccountSettingsComponent,
        GlobalSettingsViewComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule
    ]
})

export class SettingsModule { }
