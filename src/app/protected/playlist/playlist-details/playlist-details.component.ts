import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../../core/directives/clickOutside.directive';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { DataService } from '../../../shared/services/Data.service';
import { UserPlaylistService } from '../../../shared/services/UserPlaylist.service';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css'],
  imports: [CommonModule,ClickOutsideDirective]
})
export class PlaylistDetailsComponent implements OnInit {
  @Input() imgLeftLink: string | undefined;
  showEditDetails = false;
  playlist : UserPlaylist | undefined;
  playlists : UserPlaylist[] | undefined;
  user:any;

  toggleEditPlaylistName() {
    this.showEditDetails = !this.showEditDetails;
  }

  constructor(private data: DataService,private playlistService: UserPlaylistService) { }

  ngOnInit() {
    if(this.data.getOneData("u_playlist") !=  null) {
      this.user = this.data.getOneData("userConnect");
      this.playlist = this.data.getOneData("u_playlist");
    }else {
      this.user = this.data.getOneData("userConnect");
      this.playlist = {
        'idUserPlaylist': '',
        'namePlaylist': 'Ma playlist #'+Number(this.data.getData("user_playlists").length+1),
        'description': 'Description',
        'profilePicture': 'billy',
        'user': {'idUser':this.user.idUser},
        'tracks': []
      }
      this.playlistService.createUserPlaylist(this.playlist).subscribe(data => {
        if(this.playlist) {
          this.data.setUserPlaylistSelect(this.playlist);
        }
       
      })
    }
  }

}
