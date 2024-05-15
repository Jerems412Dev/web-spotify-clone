import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../shared/models/Track';

@Component({
  standalone: true,
  selector: 'app-list-artist-song',
  templateUrl: './list-artist-song.component.html',
  styleUrls: ['./list-artist-song.component.css'],
  imports: [CommonModule]
})
export class ListArtistSongComponent implements OnInit {
  showPlayPlaylist = false;
  tableTr = [1, 2, 3, 4];
  seeMoreLessContent = "See more";
  @Input("tracks") tracks: Track[] | undefined;
  track: Track | undefined;
  nb = 0;
  listen: number = Math.floor(Math.random() * (500000000 - 5000)) + 5000;

  constructor() { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  seeMoreLess() {
    if(this.tableTr.length == 4) {
      this.tableTr = [1, 2, 3, 4, 5, 6, 7, 8];
      this.seeMoreLessContent = "See less";
    }else {
      this.tableTr = [1, 2, 3, 4];
      this.seeMoreLessContent = "See more";
    }
  }

  ngOnInit() {
  }

}
