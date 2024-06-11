import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

import { Album } from '../models/Album';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  findRandom10Album(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/findrandom10album`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findAlbumByUsername(username: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/findalbumbyusername/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByCategoryName(categoryName: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/findbycategoryname/${categoryName}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  searchAlbum(containing: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/searchalbum/${containing}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  albumExist(titleAlbum: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/albumexist/${titleAlbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  albumExistInCategory(titleAlbum: string, nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/albumexistincategory/${titleAlbum}/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  deleteAlbumUser(iduser: number, idalbum: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/deletealbumuser/${iduser}/${idalbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  favAlbumByUser(idUser: number, idAlbum: number): Observable<{message: string}> {
    return this.http.get<{message: string}>(`${this.apiUrl}/albums/favalbumbyuser/${idUser}/${idAlbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByTitleAlbum(titleAlbum: string | null): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/findbytitlealbum/${titleAlbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByIdAlbumAndUsername(idalbum: number, username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/existsbyidalbumandusername/${idalbum}/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
