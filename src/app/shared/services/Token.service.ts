import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private isAuthenticated: boolean = false;
  private authToken: string = '';

  constructor() { }

  setToken(token: string): void {
    this.isAuthenticated = true;
    this.authToken = token;
    localStorage.setItem('token', token);
  }

  getToken(): string |null{
    return localStorage.getItem('token');
  }

  setUserByToken(token: string): any {
    const user:any = jwtDecode(token);
    localStorage.setItem('userConnect', user);
  }

  editIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }

  isAuthenticatedUser(): boolean {
    if(localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

}
