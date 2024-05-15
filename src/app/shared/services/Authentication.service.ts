import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { User } from '../models/User';
import { Auth } from '../models/Auth';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/auth/register`, user).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  login(auth: Auth): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/auth/login`, auth).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  logout() {
    localStorage.clear();
    return this.http.get<Response>(`${this.apiUrl}/auth/logout`);
  }
}
