import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SettingsService } from '../../../../_services/settings.service';

@Component({
    selector: 'app-global-settings-update',
    templateUrl: './global-settings-update.component.html',
    styleUrls: ['./global-settings-update.component.scss']
})
export class GlobalSettingsUpdateComponent implements OnInit {

    detailSettings: any = [];
    id = '';

    settingsForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    formdata = {};
    title = 'Edit Settings';

    constructor(
        private settingsService: SettingsService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.detailSettings = this.getDetail(this.id);

        this.settingsForm = this.formBuilder.group({
            id: [''],
            apiKey: ['', Validators.required],
            apiToken: ['', Validators.required],
            indexName: ['', Validators.required]
        });
    }

    get f() { return this.settingsForm.controls; }

    getDetail(id) {
        return this.settingsService.getDetails(id).subscribe((data: {}) => {
            this.detailSettings = data;
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.f);
        if (this.settingsForm.invalid) {
            return;
        }

        this.loading = true;

        for(let idx in this.f) {
            this.formdata[idx] = this.f[idx].value;
        }

        // return false;
        this.settingsService.updateEntry(this.f.id.value, this.formdata)
            .subscribe(
                data => {
                    this.router.navigate(['settings']);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
