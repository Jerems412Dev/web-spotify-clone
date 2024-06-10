import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { AlbumService } from '../../../shared/services/Album.service';
import { Album } from '../../../shared/models/Album';

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
              private albumService: AlbumService) {
      this.data.getUserPlaylistSelect().subscribe(data => {
        if(data) {
          this.userPlaylists?.push(data);
        }
      })
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

  ngOnInit() {
    this.userPlaylists = this.data.getData("user_playlists");
    this.user = this.data.getOneData("userConnect");
    this.findAlbumLiked();
    this.data.getAlbumSelect().subscribe(data => {
      if(data) {
        this.userPlaylists?.push(data);
      }
    })
  }

}
