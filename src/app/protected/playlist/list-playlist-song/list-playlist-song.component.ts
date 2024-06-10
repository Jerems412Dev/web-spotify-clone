import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { DataService } from '../../../shared/services/Data.service';

@Component({
    selector: 'app-list-playlist-song',
    standalone: true,
    templateUrl: './list-playlist-song.component.html',
    styleUrls: ['./list-playlist-song.component.css'],
    imports: [CommonModule]
})
export class ListPlaylistSongComponent implements OnInit {
  showPlayPlaylist = false;
  playlist : UserPlaylist | undefined;
  user:any;
  nb = 0;

  constructor(private data: DataService) { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  ngOnInit() {
    if(this.data.getOneData("u_playlist") !=  null) {
      this.playlist = this.data.getOneData("u_playlist");
    }else {
      this.user = this.data.getOneData("userConnect");
      this.playlist = {
        'idUserPlaylist': null,
        'namePlaylist': 'Ma playlist #'+this.data.getData("user_playlists").length,
        'description': 'Description',
        'profilePicture': 'billy',
        'user': {'idUser':this.user.idUser},
        'tracks': []
      }
    }
  }

}
