import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackListen } from '../models/TrackListen';
import { TokenService } from './Token.service';

@Injectable({
  providedIn: 'root'
})
export class TrackListenService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  findLastTrackListen(username: string): Observable<TrackListen> {
    return this.http.get<TrackListen>(`${this.apiUrl}/tracklistens/findlasttracklisten/${username}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByUserAndTrack(username: string, titleTrack: string): Observable<TrackListen[]> {
    return this.http.get<TrackListen[]>(`${this.apiUrl}/tracklistens/findbyuserandtrack/${username}/${titleTrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  findByUserAndTrackNot(username: string, titleTrack: string): Observable<TrackListen[]> {
    return this.http.get<TrackListen[]>(`${this.apiUrl}/tracklistens/findbyuserandtracknot/${username}/${titleTrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

  existsByUserAndTrack(username: string, titleTrack: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/tracklistens/existsbyuserandtrack/${username}/${titleTrack}`, {
      headers: this.httpOptions.headers.set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    });
  }

}
