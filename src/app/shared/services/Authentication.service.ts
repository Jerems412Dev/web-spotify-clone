import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.post<string>(`${this.apiUrl}/auth/register`, user);
  }

  login(auth: Auth): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/auth/login`, auth);
  }

  logout() {
    return this.http.get<Response>(`${this.apiUrl}/auth/logout`);
  }
}