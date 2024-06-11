import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { AlbumService } from '../../../shared/services/Album.service';
import { Album } from '../../../shared/models/Album';
import { UserPlaylistService } from '../../../shared/services/UserPlaylist.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink]
})
export class SidebarComponent implements OnInit { 
  userPlaylists: UserPlaylist[] | undefined;
  user: any;
  albums: Album[] | undefined;

  constructor(private router: Router,
              private data: DataService,
              private albumService: AlbumService,
              private userPlaylistService: UserPlaylistService,) {
      
  }

  isActiveHome(): boolean {
    if(this.router.url === '/home') {
      return true
    }
    return false;
  }

  isActiveSearch(): boolean {
    if(this.router.url === '/search') {
      return true;
    }
    return false;
  }

  isNewPlaylist() {
    this.data.setData("u_playlist",null);
  }

  isOldPlaylist(value: string) {
    this.data.setData("u_playlist",this.data.getData("user_playlists").find(playlist => playlist.namePlaylist === value));
  }

  findAlbumLiked() {
    let user: any = this.data.getOneData("userConnect");
    this.albumService.findAlbumByUsername(user.sub).subscribe(list => {
      this.albums = list;
    })
  }

  findPlaylistsUser() {
    let user: any = this.data.getOneData("userConnect");
    this.userPlaylistService.findByUsername(user.sub).subscribe(list => {
      this.data.setData("user_playlists",list);
      this.userPlaylists = list;
    });
  }

  ngOnInit() {
    this.user = this.data.getOneData("userConnect");
    this.findPlaylistsUser();
    this.data.getUserPlaylistSelect().subscribe(data => {
      if(data) {
        this.userPlaylists?.push(data);
      }
    });
    this.findAlbumLiked();
    this.data.getAlbumSelect().subscribe(data => {
      if(data) {
        this.albums?.push(data);
      }
    })
  }

}
