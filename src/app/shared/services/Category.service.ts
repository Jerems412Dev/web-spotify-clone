import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  findByNameCategory(nameCategory: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/findbynamecategory/${nameCategory}`);
  }

  findByIdCategory(idCategory: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/findbyidcategory/${idCategory}`);
  }

  findByTitleAlbum(titleAlbum: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbytitlealbum/${titleAlbum}`);
  }

  findByNameArtist(nameArtist: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbynameartist/${nameArtist}`);
  }

  findByNamePlaylist(namePlaylist: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/findbynameplaylist/${namePlaylist}`);
  }

  categoryExist(nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/categories/categoryExist/${nameCategory}`);
  }

}
