import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../auth.service';

@Component({
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(private _authService: AuthenticationService, private router: Router) {}

    ngOnInit() {
      this._authService.logout();
      this.router.navigate(['login']);
    }

  }