import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findArtistByUsername(username: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/findartistbyusername/${username}`);
  }

  findByCategoryName(categoryName: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/findbycategoryname/${categoryName}`);
  }

  searchArtist(containing: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/searchartist/${containing}`);
  }

  artistExist(nameArtist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/artistexist/${nameArtist}`);
  }

  artistExistInCategory(nameArtist: string, nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/artistexistincategory/${nameArtist}/${nameCategory}`);
  }

  deleteArtistUser(username: string, nameArtist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/deleteartistuser/${username}/${nameArtist}`);
  }

  favArtistByUser(idUser: number, idArtist: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/artists/favartistbyuser/${idUser}/${idArtist}`);
  }

  findByNameArtist(nameArtist: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/artists/findartistbynameartist/${nameArtist}`);
  }

}
