import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAlbumByUsername(username: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/findalbumbyusername/${username}`);
  }

  findByCategoryName(categoryName: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/findbycategoryname/${categoryName}`);
  }

  searchAlbum(containing: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums/searchalbum/${containing}`);
  }

  albumExist(titleAlbum: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/albumexist/${titleAlbum}`);
  }

  albumExistInCategory(titleAlbum: string, nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/albumexistincategory/${titleAlbum}/${nameCategory}`);
  }

  deleteAlbumUser(username: string, titleAlbum: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/albums/deletealbumuser/${username}/${titleAlbum}`);
  }

  favAlbumByUser(idUser: number, idAlbum: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/albums/favalbumbyuser/${idUser}/${idAlbum}`);
  }

  findByTitleAlbum(titleAlbum: string): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/findbytitlealbum/${titleAlbum}`);
  }

}
