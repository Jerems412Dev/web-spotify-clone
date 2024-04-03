import { Component, OnInit } from '@angular/core';
import { PlaylistDetailsComponent } from '../playlist-details/playlist-details.component';
import { CommonModule } from '@angular/common';
import { ListPlaylistSongComponent } from '../list-playlist-song/list-playlist-song.component';
import { ListRecommandedSongComponent } from "../list-recommanded-song/list-recommanded-song.component";

@Component({
    selector: 'app-playlist',
    standalone: true,
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css'],
    imports: [PlaylistDetailsComponent, CommonModule, ListPlaylistSongComponent, ListRecommandedSongComponent]
})
export class PlaylistComponent implements OnInit {

  ngOnInit() {
  }

}
