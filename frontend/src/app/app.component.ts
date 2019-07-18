import {Component, OnInit} from '@angular/core';
import {UserService} from './_services/user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public user: any;
 
  constructor(private _userService: UserService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }
 
  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }
 

}
