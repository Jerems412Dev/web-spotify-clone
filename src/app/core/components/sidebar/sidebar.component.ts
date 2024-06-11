import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { AlbumService } from '../../../shared/services/Album.service';
import { Album } from '../../../shared/models/Album';
import { UserPlaylistService } from '../../../shared/services/UserPlaylist.service';
import { ArtistService } from '../../../shared/services/Artist.service';
import { Artist } from '../../../shared/models/Artist';
import { debounceTime } from 'rxjs';

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
  artists: Artist[] | undefined;
  s_albums: Album[] | undefined;
  s_artists: Artist[] | undefined;
  s_userPlaylists: UserPlaylist[] | undefined;
  value = '';
  isCorrect = false;

  constructor(private router: Router,
              private data: DataService,
              private albumService: AlbumService,
              private artistService: ArtistService,
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
    if(this.data.existDataStorage("user_albums")){
      this.albums = this.data.getData("user_albums");
    }else{
      let user: any = this.data.getOneData("userConnect");
      this.albumService.findAlbumByUsername(user.sub).subscribe(list => {
      this.albums = list;
      this.data.setData("user_albums",list);
    })
    }
  }

  findArtistsFollowing() {
    if(this.data.existDataStorage("user_artists")){
      this.artists = this.data.getData("user_artists");
    }else{
      let user: any = this.data.getOneData("userConnect");
      this.artistService.findArtistByUsername(user.sub).subscribe(list => {
      this.artists = list;
      this.data.setData("user_artists",list);
    })
    }
  }

  findPlaylistsUser() {
    if(this.data.existDataStorage("user_playlists")){
      this.userPlaylists = this.data.getData("user_playlists");
    }else{
      let user: any = this.data.getOneData("userConnect");
      this.userPlaylistService.findByUsername(user.sub).subscribe(list => {
      this.data.setData("user_playlists",list);
      this.userPlaylists = list;
    });
    }
  }

  findPlaylist(value: string) {
    this.s_userPlaylists = this.data.getData("user_playlists").filter(playlist =>
      playlist.namePlaylist.toLowerCase().includes(value.toLowerCase()));
  }

  findAlbum(value: string) {
    this.s_albums = this.data.getData("user_albums").filter(album =>
      album.titleAlbum.toLowerCase().includes(value.toLowerCase()) ||
      album.artist.nameArtist.toLowerCase().includes(value.toLowerCase())
    );
  }

  findArtist(value: string) {
    this.s_artists = this.data.getData("user_artists").filter(artist =>
      artist.nameArtist.toLowerCase().includes(value.toLowerCase())
    );
  }

  onInputChange(event: any): void {
    debounceTime(900);
    this.checkIfWriting(event.target.value);
  }

  checkIfWriting(value: string): void {
    if(/\S/.test(value) && value.length > 1) {
      this.findAlbum(value);
      this.findArtist(value);
      this.findPlaylist(value);
      this.isCorrect = true;
    }else {
      this.isCorrect = false;
      this.s_albums = [];
      this.s_artists = [];
      this.s_userPlaylists = [];
    } 
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
    });
    this.data.getAlbumDeleteSelect().subscribe(data => {
      if(data) {
        this.albums = this.albums?.filter(album => album.idAlbum !== data );
      }
    });
    this.findArtistsFollowing();
    this.data.getArtistSelect().subscribe(data => {
      if(data) {
        this.artists?.push(data);
      }
    });
  }

}
