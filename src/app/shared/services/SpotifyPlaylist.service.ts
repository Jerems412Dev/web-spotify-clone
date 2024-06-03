import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyPlaylist } from '../models/SpotifyPlaylist';
import { Observable } from 'rxjs';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaylistService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  findByNamePlaylist(namePlaylist: string): Observable<SpotifyPlaylist> {
    return this.http.get<SpotifyPlaylist>(`${this.apiUrl}/spotifyplaylists/findbynameplaylist/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findRandom10Playlist(): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/findrandom10playlist`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdPlaylist(idPlaylist: number): Observable<SpotifyPlaylist> {
    return this.http.get<SpotifyPlaylist>(`${this.apiUrl}/spotifyplaylists/findbyidplaylist/${idPlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNameCategory(nameCategory: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/findbynamecategory/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByUsername(username: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/findbyusername/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  searchSpotifyPlaylist(containing: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/searchspotifyplaylist/${containing}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  playlistExist(namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/spotifyplaylists/playlistexist/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  deleteByUsernameAndNamePlaylist(username: string, namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/spotifyplaylists/spotifyplaylists/deletebyusernameandnameplaylist/${username}/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
