import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { Setting } from '../_models/settings'

import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class SettingsService {
    private settingsObservable: Observable<any[]>;

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    list(): Observable<Setting> {
        return this.http.get<Setting>(`${environment.apiUrl}/settings/`)
            .pipe( retry(1), catchError(this.handleError) )
    }

    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
        // Get client-side error
            errorMessage = error.error.message;
        } else {
        // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}