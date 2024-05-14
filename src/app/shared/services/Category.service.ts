import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = environment.apiUrl; 
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  findByNameCategory(nameCategory: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/findbynamecategory/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdCategory(idCategory: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/findbyidcategory/${idCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByTitleAlbum(titleAlbum: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbytitlealbum/${titleAlbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNameArtist(nameArtist: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbynameartist/${nameArtist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNamePlaylist(namePlaylist: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbynameplaylist/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  categoryExist(nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/categories/categoryExist/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
