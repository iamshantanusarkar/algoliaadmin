import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../_services/settings.service';

@Component({
  selector: 'app-global-settings-list',
  templateUrl: './global-settings-list.component.html',
  styleUrls: ['./global-settings-list.component.scss']
})
export class GlobalSettingsListComponent implements OnInit {

    allSettings: any = [];

    constructor(
        private settingsService: SettingsService
    ) { }

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
        return this.settingsService.deleteEntry(id).subscribe((data: {}) => {
            window.location.reload();
        });
    }

}
