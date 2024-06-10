import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/Data.service';
import { Track } from '../../../shared/models/Track';
import { debounceTime } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-recommanded-song',
  standalone: true,
  templateUrl: './list-recommanded-song.component.html',
  styleUrls: ['./list-recommanded-song.component.css'],
  imports: [CommonModule,RouterLink]
})
export class ListRecommandedSongComponent implements OnInit {
  isShowDiv = false;
  tracks: Track[] | undefined;
  tracksSearch: Track[] | undefined;
  nb_track = 0;
  val = 0;

  constructor(private data: DataService) { }

  toggleDiv() {
    this.isShowDiv = !this.isShowDiv;
    this.tracksSearch = [];
  }

  findTrack(value: string) {
    this.tracksSearch = this.data.getData("home_tracks").filter(track =>
      track.titleTrack.toLowerCase().includes(value.toLowerCase()) ||
      track.artists[0].nameArtist.toLowerCase().includes(value.toLowerCase())
    );
    this.nb_track = this.tracksSearch.length;
  }

  onInputChange(event: any): void {
    debounceTime(900);
    this.checkIfWriting(event.target.value);
  }

  checkIfWriting(value: string): void {
    if(/\S/.test(value) && value.length > 1) {
      this.findTrack(value);
    }else {
      this.nb_track = 0;
      this.tracksSearch = [];
    } 
  }

  stopEventSvg(track: Track,event: MouseEvent) {
    event.stopPropagation();
    if(track) {
      this.data.setTrackSelect(track);
    }
  }

  ngOnInit() {
    this.val = Math.floor(Math.random() * (80 - 0)) + 0;
    this.tracks = this.data.getData("home_tracks");
  }

}
