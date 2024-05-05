import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SpotifyPlaylist } from '../models/SpotifyPlaylist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaylistService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findByNamePlaylist(namePlaylist: string): Observable<SpotifyPlaylist> {
    return this.http.get<SpotifyPlaylist>(`${this.apiUrl}/spotifyplaylists/findbynameplaylist/${namePlaylist}`);
  }

  findByIdPlaylist(idPlaylist: number): Observable<SpotifyPlaylist> {
    return this.http.get<SpotifyPlaylist>(`${this.apiUrl}/spotifyplaylists/findbyidplaylist/${idPlaylist}`);
  }

  findByNameCategory(nameCategory: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/findbynamecategory/${nameCategory}`);
  }

  findByUsername(username: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/findbyusername/${username}`);
  }

  searchSpotifyPlaylist(containing: string): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyPlaylist[]>(`${this.apiUrl}/spotifyplaylists/searchspotifyplaylist/${containing}`);
  }

  playlistExist(namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/spotifyplaylists/playlistexist/${namePlaylist}`);
  }

  deleteByUsernameAndNamePlaylist(username: string, namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/spotifyplaylists/deletebyusernameandnameplaylist/${username}/${namePlaylist}`);
  }

}
