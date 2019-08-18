import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/${environment.ModuleUrls.auth}/api-token-auth/`, { "username" :username, "password": password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    // loginPromise(username: string, password: string): Promise<any>{
    //     return new Promise((resolve, reject) => {
    //         this.http.post<any>(`${environment.apiUrl}api-token-auth/`, { "username" :username, "password": password })
    //         .toPromise().then((success) => {
    //             resolve(success.JSON());
    //         }).catch((err) => {
    //             reject(err);
    //         });
    //     });
    //     //return ;
    // }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    register(formData: object) {
        console.log(formData);
        return this.http.post<any>(`${environment.apiUrl}/${environment.ModuleUrls.auth}/register/`, formData)
            .pipe(map(user => {
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    forgotPassword() {}

    restPassword() {}
}
