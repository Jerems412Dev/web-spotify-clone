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
    const jsonData = localStorage.getItem("token");    
    if (!jsonData) {
      return null;
    }  
    return jsonData;
  }

  setUserByToken(token: string): any {
    const user:any = jwtDecode(token);
    localStorage.setItem('userConnect', JSON.stringify(user));
  }

  editIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }

  isToken(key: string): boolean {
    const jsonData = localStorage.getItem(key);    
    if (!jsonData) {
      return false;
    }    
    return true;
  }

  isAuthenticatedUser(): boolean {
    if(this.isToken("token")) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

}
