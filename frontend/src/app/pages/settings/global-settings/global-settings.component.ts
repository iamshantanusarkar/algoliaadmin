import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SettingsService } from '../../../_services/settings.service';

@Component({
    templateUrl: './global-settings.component.html',
})

export class GlobalSettingsComponent implements OnInit {

    allSettings: any = [];

    constructor(
        private settingsService: SettingsService
    ) {}

    ngOnInit() {
        this.loadAllSettings();
    }

    loadAllSettings() {
        return this.settingsService.listAll().subscribe((data: {}) => {
            this.allSettings = data;
        });
    }

    deleteItem(id) {
        console.log(id);
    }
}


@Component({
    templateUrl: './global-settingsView.component.html',
})

export class GlobalSettingsViewComponent implements OnInit {
    id = this.actRoute.snapshot.params['id'];
    constructor(
        private settingsService: SettingsService,
        public actRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.getItem(this.id);
    }

    getItem(id) {
        console.log(id);
    }
}