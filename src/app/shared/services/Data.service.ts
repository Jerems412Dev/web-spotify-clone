import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../models/Track';
import { Artist } from '../models/Artist';
import { Section } from '../models/Section';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trackListen = new BehaviorSubject<any>(null);
  private artist = new BehaviorSubject<any>(null);
  private section = new BehaviorSubject<any>(null);

  constructor() { }

  setTrackSelect(track: Track) {
    this.trackListen.next(track);
  }

  setArtistSelect(artist: Artist) {
    this.artist.next(artist);
  }

  setSectionSelect(section: Section) {
    this.section.next(section);
  }

  getSectionSelect() {
    return this.section.asObservable();
  }

  getArtistSelect() {
    return this.artist.asObservable();
  }

  getTrackSelect() {
    return this.trackListen.asObservable();
  }

  saveData(key: string, data: any[]): void {
    const jsonData = JSON.stringify(data);    
    localStorage.setItem(key, jsonData);
  }

  setData(key: string, data: any): void {
    const jsonData = JSON.stringify(data);    
    localStorage.setItem(key, jsonData);
  }

  getOneData(key: string): any {
    return localStorage.getItem(key);
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