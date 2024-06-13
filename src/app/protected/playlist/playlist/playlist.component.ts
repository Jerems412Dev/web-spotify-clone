import { Component, OnInit } from '@angular/core';
import { PlaylistDetailsComponent } from '../playlist-details/playlist-details.component';
import { CommonModule } from '@angular/common';
import { ListPlaylistSongComponent } from '../list-playlist-song/list-playlist-song.component';
import { ListRecommandedSongComponent } from "../list-recommanded-song/list-recommanded-song.component";
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { DataService } from '../../../shared/services/Data.service';
import { UserPlaylistService } from '../../../shared/services/UserPlaylist.service';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from '../../../shared/services/Encryption.service';

@Component({
    selector: 'app-playlist',
    standalone: true,
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css'],
    imports: [PlaylistDetailsComponent, CommonModule, ListPlaylistSongComponent, ListRecommandedSongComponent]
})
export class PlaylistComponent implements OnInit {
  playlist: UserPlaylist | undefined;
  user:any;

  constructor(private data: DataService,
              private route: ActivatedRoute,
              private userPlaylistService: UserPlaylistService,
              private encrypt: EncryptionService) {

  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if(fragment) {
        let user: any = this.data.getOneData("userConnect");
        this.userPlaylistService.findByUsername(user.sub).subscribe(list => {
          this.data.setData("user_playlists",list);
          this.playlist = list.find(playlist => playlist.namePlaylist === this.encrypt.decrypt(fragment));
        });
      }
    });
  }

}
