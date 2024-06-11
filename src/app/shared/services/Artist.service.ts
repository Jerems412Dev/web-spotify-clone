import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/Artist';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  findRandom10Artist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/findrandom10artist`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findArtistByUsername(username: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/findartistbyusername/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByCategoryName(categoryName: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/findbycategoryname/${categoryName}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  searchArtist(containing: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists/searchartist/${containing}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  artistExist(nameArtist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/artistexist/${nameArtist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  artistExistInCategory(nameArtist: string, nameCategory: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/artistexistincategory/${nameArtist}/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  deleteArtistUser(username: string, nameArtist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/deleteartistuser/${username}/${nameArtist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  favArtistByUser(idUser: number, idArtist: number): Observable<{message: string}> {
    return this.http.get<{message: string}>(`${this.apiUrl}/artists/favartistbyuser/${idUser}/${idArtist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNameArtist(nameArtist: string | null): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/artists/findartistbynameartist/${nameArtist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByIdArtistAndUsername(idartist: number, username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/artists/existsbyidartistandusername/${idartist}/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
