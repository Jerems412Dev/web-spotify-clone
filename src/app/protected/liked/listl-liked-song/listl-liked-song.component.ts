import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listl-liked-song',
  standalone: true,
  templateUrl: './listl-liked-song.component.html',
  styleUrls: ['./listl-liked-song.component.css'],
  imports: [CommonModule]
})
export class ListlLikedSongComponent implements OnInit {
  showPlayPlaylist = false;

  constructor() { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  ngOnInit() {
  }

}
