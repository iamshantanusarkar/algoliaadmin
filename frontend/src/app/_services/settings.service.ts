import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { map, filter, retry, catchError } from 'rxjs/operators';

import { Setting } from '../_models/settings';

import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class SettingsService {
    private settingsObservable: Observable<any[]>;

    constructor(
        private http: HttpClient
    ) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    listAll(): Observable<Setting> {
        return this.http.get<Setting>(`${environment.apiUrl}/settings/`)
            .pipe(
                map( res => {
                    return  res;
                }),
                catchError(this.handleError)
            );
    }

    create(formData: object): Observable<Setting> {
        return this.http.post<Setting>(`${environment.apiUrl}/settings/`, formData)
            .pipe(
                map( res => {
                    return res;
                }),
                catchError(this.handleError)
            );
    }

    getDetails(id: any): Observable<Setting> {
        return this.http.get<Setting>(`${environment.apiUrl}/settings/view/${id}`)
            .pipe(
                map( res => {
                    return  res;
                }),
                catchError(this.handleError)
            );
    }

    updateEntry(id, formData: object): Observable<Setting> {
        return this.http.put<Setting>(`${environment.apiUrl}/settings/view/${id}/`, formData)
            .pipe(
                map( res => {
                    return  res;
                }),
                catchError(this.handleError)
            );
    }

    deleteEntry(id: any): Observable<Setting> {
        return this.http.delete<Setting>(`${environment.apiUrl}/settings/view/${id}`)
            .pipe(
                map( res => {
                    return  res;
                }),
                catchError(this.handleError)
            );
    }

    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        // Get client-side error
            errorMessage = error.error.message;
        } else {
        // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

}