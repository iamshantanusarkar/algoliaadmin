import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../auth.service';

@Component({
  templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
    ForgotPasswordForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    error = '';
    title = 'Register';

    constructor(
        private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
        // private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    get f() { return this.ForgotPasswordForm.controls; }

    ngOnInit() {
        this.ForgotPasswordForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.email,
                Validators.required
            ])]
        });
    }

    onSubmit() {

        this.submitted = true;

        if (this.ForgotPasswordForm.invalid) {
            console.log(this.ForgotPasswordForm.controls);
            return false;
        }

        console.log(this.f); return false;

    }
}
