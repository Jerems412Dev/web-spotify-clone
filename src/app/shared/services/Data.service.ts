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

  saveData(key: string, data: any[]): void {
    const jsonData = JSON.stringify(data);    
    localStorage.setItem(key, jsonData);
  }

  getData(key: string): any[] {
    const jsonData = localStorage.getItem(key);    
    if (!jsonData) {
      return [];
    }    
    return JSON.parse(jsonData);
  }

  existDataStorage(key: string):boolean {
    if(localStorage.getItem(key)) {
      return true;
    }
    return false;
  }

}
