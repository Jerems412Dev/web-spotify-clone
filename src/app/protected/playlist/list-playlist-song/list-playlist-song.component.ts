import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-playlist-song',
    standalone: true,
    templateUrl: './list-playlist-song.component.html',
    styleUrls: ['./list-playlist-song.component.css'],
    imports: [CommonModule]
})
export class ListPlaylistSongComponent implements OnInit {
  showPlayPlaylist = false;

  constructor() { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  ngOnInit() {
  }

}
