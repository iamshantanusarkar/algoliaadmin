import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { SettingsService } from '../../../../_services/settings.service';

@Component({
    selector: 'app-global-settings-create',
    templateUrl: './global-settings-create.component.html',
    styleUrls: ['./global-settings-create.component.scss']
})
export class GlobalSettingsCreateComponent implements OnInit {

    settingsForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    formdata = {};
    title = 'Create Settings';

    constructor(
        private settingsService: SettingsService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.settingsForm = this.formBuilder.group({
            apiKey: ['', Validators.required],
            apiToken: ['', Validators.required],
            indexName: ['', Validators.required]
        });
    }

    get f() { return this.settingsForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.settingsForm.invalid) {
            return;
        }

        this.loading = true;

        for(let idx in this.f) {
            this.formdata[idx] = this.f[idx].value;
        }
        
        // return false;
        this.settingsService.create(this.formdata)
            .subscribe(
                data => {
                    this.router.navigate(['settings/list']);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
