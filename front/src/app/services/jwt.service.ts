import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { catchError, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';

@Injectable({
providedIn: 'root'
})

export class JwtService {
  endpoint: string = 'api.agencia.local:8004';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  register(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  login(user: User) {
    return this.http.post<any>(`${this.endpoint}/api/check_login`, user)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.token)
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  getUserProfile() {
  
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  
}
