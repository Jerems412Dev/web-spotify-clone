import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserPlaylist } from '../models/UserPlaylist';
import { Observable } from 'rxjs';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class UserPlaylistService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  createUserPlaylist(playlist: UserPlaylist): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/userplaylists/createuserplaylist`, playlist, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByNamePlaylist(namePlaylist: string): Observable<UserPlaylist> {
    return this.http.get<UserPlaylist>(`${this.apiUrl}/userplaylists/findbynameplaylist/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByIdPlaylist(idPlaylist: number): Observable<UserPlaylist> {
    return this.http.get<UserPlaylist>(`${this.apiUrl}/userplaylists/findbyidplaylist/${idPlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByUsername(username: string): Observable<UserPlaylist[]> {
    return this.http.get<UserPlaylist[]>(`${this.apiUrl}/userplaylists/findbyusername/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByNamePlaylist(namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/userplaylists/existsbynameplaylist/${namePlaylist}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  deleteByTracksAndUserPlaylist(titleTrack: string, id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/userplaylists/deletebytracksanduserplaylist/${titleTrack}/${id}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
