import { Component, OnInit } from '@angular/core';
import { PlaylistDetailsComponent } from '../playlist-details/playlist-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist',
  standalone: true,
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  imports: [PlaylistDetailsComponent, CommonModule]
})
export class PlaylistComponent implements OnInit {
  showPlayPlaylist = false;

  constructor() { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  ngOnInit() {
  }

}
