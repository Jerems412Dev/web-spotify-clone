import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { DataService } from './Data.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private isAuthenticated: boolean = false;
  private authToken: string = '';

  constructor(private data: DataService) { }

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
    if (this.isLocalStorageAvailable()) {
      return !!localStorage.getItem(key);
    } else {
      return false;
    }
  }

  /*isAuthenticatedUser(): boolean {
    if(this.isToken("token")) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }*/

  isAuthenticatedUser(): Observable<boolean> {
    const isAuthenticated = this.isToken("token");
    this.isAuthenticated = isAuthenticated;
    return of(this.isAuthenticated);
  }

  isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

}
