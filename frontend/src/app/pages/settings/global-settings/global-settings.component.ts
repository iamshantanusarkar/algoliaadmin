import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../../_services/settings.service';

@Component({
    templateUrl: './global-settings.component.html',
})

export class GlobalSettingsComponent implements OnInit {

    allSettings: any;

    constructor(
        private settingsService: SettingsService
    ) {}

    ngOnInit() {

        this.allSettings = this.settingsService.list();
        console.log(this.allSettings);
        // this.list = this.allSettings[0];
    }
}
