import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsService } from '../../../../_services/settings.service';

@Component({
    templateUrl: './global-settings-details.component.html',
    styleUrls: ['./global-settings-details.component.scss']
})
export class GlobalSettingsDetailsComponent implements OnInit {

    detailSettings: any = [];

    constructor(
        private settingsService: SettingsService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.getDetail(id);
    }

    getDetail(id) {
        return this.settingsService.getDetails(id).subscribe((data: {}) => {
            this.detailSettings = data;
        });
    }

}
