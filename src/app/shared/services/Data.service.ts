import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../models/Track';
import { Artist } from '../models/Artist';
import { Section } from '../models/Section';
import { UserPlaylist } from '../models/UserPlaylist';
import { Album } from '../models/Album';
import { TrackListen } from '../models/TrackListen';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private track = new BehaviorSubject<any>(null);
  private trackAddPlaylist = new BehaviorSubject<any>(null);
  private trackListen = new BehaviorSubject<any>(null);
  private artist = new BehaviorSubject<any>(null);
  private album = new BehaviorSubject<any>(null);
  private albumDelete = new BehaviorSubject<any>(null);
  private section = new BehaviorSubject<any>(null);
  private search = new BehaviorSubject<any>(null);
  private userPlaylist = new BehaviorSubject<any>(null);

  constructor() { }

  setTrackAddPlaylistSelect(trackAddPlaylist: Track) {
    this.trackAddPlaylist.next(trackAddPlaylist);
  }

  setTrackSelect(track: Track) {
    this.track.next(track);
  }

  setTrackListenSelect(track: TrackListen) {
    this.trackListen.next(track);
  }

  setUserPlaylistSelect(playlist: UserPlaylist) {
    this.userPlaylist.next(playlist);
  }

  setSearchSelect(search: string) {
    this.search.next(search);
  }

  setAlbumSelect(album: Album) {
    this.album.next(album);
  }

  setAlbumDeleteSelect(album: number) {
    this.albumDelete.next(album);
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

  getAlbumSelect() {
    return this.album.asObservable();
  }

  getAlbumDeleteSelect() {
    return this.albumDelete.asObservable();
  }

  getUserPlaylistSelect() {
    return this.userPlaylist.asObservable();
  }

  getSearchSelect() {
    return this.search.asObservable();
  }

  getArtistSelect() {
    return this.artist.asObservable();
  }

  getTrackAddPlaylistSelect() {
    return this.trackAddPlaylist.asObservable();
  }

  getTrackSelect() {
    return this.track.asObservable();
  }

  getTrackListenSelect() {
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
    if(this.isLocalStorageAvailable()) {
      const jsonData = localStorage.getItem(key);
      if (!jsonData) {
        return null;
      }  
      return JSON.parse(jsonData);
    }else {
      return null;
    }
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

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

}
