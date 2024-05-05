import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserPlaylist } from '../models/UserPlaylist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPlaylistService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createUserPlaylist(playlist: UserPlaylist): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/userplaylists/createuserplaylist`, playlist);
  }

  findByNamePlaylist(namePlaylist: string): Observable<UserPlaylist> {
    return this.http.get<UserPlaylist>(`${this.apiUrl}/userplaylists/findbynameplaylist/${namePlaylist}`);
  }

  findByIdPlaylist(idPlaylist: number): Observable<UserPlaylist> {
    return this.http.get<UserPlaylist>(`${this.apiUrl}/userplaylists/findbyidplaylist/${idPlaylist}`);
  }

  findByUsername(username: string): Observable<UserPlaylist[]> {
    return this.http.get<UserPlaylist[]>(`${this.apiUrl}/userplaylists/findbyusername/${username}`);
  }

  existsByNamePlaylist(namePlaylist: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/userplaylists/existsbynameplaylist/${namePlaylist}`);
  }

  deleteByTracksAndUserPlaylist(titleTrack: string, id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/userplaylists/deletebytracksanduserplaylist/${titleTrack}/${id}`);
  }

}
