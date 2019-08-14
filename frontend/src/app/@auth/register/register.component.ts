import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/auth.service';
import { CustomValidator } from '../../_services/customvalidators';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    formdataObj: object;

    error = '';
    title = 'Register';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.email,
                Validators.required
            ])],
            phone: ['', Validators.compose([
                CustomValidator.patternValidator(/\d/, { hasNumber: true }),
            ])],
            password: ['', Validators.compose([
                // 1. Password Field is Required
                Validators.required,
                // 2. check whether the entered password has a number
                // CustomValidator.patternValidator(/\d/, { hasNumber: true }),
                // 3. check whether the entered password has upper case letter
                // CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                // 4. check whether the entered password has a lower-case letter
                // CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
                // 6. Has a minimum length of 8 characters
                Validators.minLength(8)])
            ],
            confirmpassword: ['', Validators.compose([Validators.required])]
        }, {
            // check whether our password and confirm password match
            validator: CustomValidator.passwordMatchValidator
        });

    }

    get f() { return this.registerForm.controls; }

    onSubmit() {

        this.submitted = true;

        if (this.registerForm.invalid) {
            console.log(this.registerForm.controls);
            return false;
        }

        //console.log(this.f); return false;

        this.loading = true;

        this.formdataObj = {
            firstname: this.f.firstname.value,
            lastname: this.f.lastname.value,
            email: this.f.email.value,
            phone: this.f.phone.value,
            password: this.f.password.value,
        }

        this.authenticationService.register(this.formdataObj)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
