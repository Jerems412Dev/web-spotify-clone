import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../models/Track';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trackListen = new BehaviorSubject<any>(null);

  constructor() { }

  setTrackSelect(track: Track) {
    this.trackListen.next(track);
  }

  getTrackSelect() {
    return this.trackListen.asObservable();
  }

}
