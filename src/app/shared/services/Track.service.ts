import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './Token.service';
import { Track } from '../models/Track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  createTrack(track: Track): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/createtrack`, track, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  createTracks(tracks: Track[]): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/createtracks`, tracks, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findTrackByTitle(titletrack: string): Observable<Track> {
    return this.http.get<Track>(`${this.apiUrl}/findtrackbytitle/${titletrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findTrackById(idtrack: number): Observable<Track> {
    return this.http.get<Track>(`${this.apiUrl}/findtrackbyId/${idtrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findTrackByUsername(username: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findtrackbyusername/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findTrackByTitleAlbum(titlealbum: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findtrackbytitlealbum/${titlealbum}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findTrackByNameArtist(nameartist: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findtrackbynameartist/${nameartist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNameCategory(nameCategory: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findbynamecategory/${nameCategory}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdUserPlaylist(idplaylist: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findbyiduserplaylist/${idplaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdUserPlaylistNot(idplaylist: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findbyiduserplaylistnot/${idplaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdSpotifyPlaylist(idplaylist: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findbyidspotifyplaylist/${idplaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdSpotifyPlaylistNot(idplaylist: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findbyidspotifyplaylistnot/${idplaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByTitleTrackContaining(search: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/findBytitletrackcontaining/${search}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByTitleTrack(titletrack: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existsByTitleTrack/${titletrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByTitleTrackAndUsername(titletrack: string, username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existsbytitletrackandusername/${titletrack}/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  deleteByUsernameAndTitleTrack(username: string, titletrack: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/deletebyusernameandtitletrack/${username}/${titletrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
