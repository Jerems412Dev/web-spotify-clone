import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackListen } from '../models/TrackListen';

@Injectable({
  providedIn: 'root'
})
export class TrackListenService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findLastTrackListen(username: string): Observable<TrackListen> {
    return this.http.get<TrackListen>(`${this.apiUrl}/tracklistens/findlasttracklisten/${username}`);
  }

  findByUserAndTrack(username: string, titleTrack: string): Observable<TrackListen[]> {
    return this.http.get<TrackListen[]>(`${this.apiUrl}/tracklistens/findbyuserandtrack/${username}/${titleTrack}`);
  }

  findByUserAndTrackNot(username: string, titleTrack: string): Observable<TrackListen[]> {
    return this.http.get<TrackListen[]>(`${this.apiUrl}/tracklistens/findbyuserandtracknot/${username}/${titleTrack}`);
  }

  existsByUserAndTrack(username: string, titleTrack: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/tracklistens/existsbyuserandtrack/${username}/${titleTrack}`);
  }

}
