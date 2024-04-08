import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
