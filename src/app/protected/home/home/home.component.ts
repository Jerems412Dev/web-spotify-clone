import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';
import { HomeCategoryComponent } from '../home-category/home-category.component';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { RecentlyItemComponent } from "../../../shared/components/recently-item/recently-item.component";
import { TrackService } from '../../../shared/services/Track.service';
import { AlbumService } from '../../../shared/services/Album.service';
import { ArtistService } from '../../../shared/services/Artist.service';
import { Artist } from '../../../shared/models/Artist';
import { Album } from '../../../shared/models/Album';
import { Track } from '../../../shared/models/Track';
import { CommonModule } from '@angular/common';
import { SpotifyPlaylist } from '../../../shared/models/SpotifyPlaylist';
import { SpotifyPlaylistService } from '../../../shared/services/SpotifyPlaylist.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CommonModule, SqueletonComponent, HomeCategoryComponent, MusicItemComponent, ArtistItemComponent, AlbumItemComponent, PlaylistItemComponent, RecentlyItemComponent]
})
export class HomeComponent implements OnInit {
  artists: Artist[] | undefined;
  albums: Album[] | undefined;
  tracks: Track[] | undefined;
  playlists: SpotifyPlaylist[] | undefined;

  constructor(private trackService: TrackService,
              private albumService: AlbumService,
              private artistService: ArtistService,
              private playlistService: SpotifyPlaylistService) { }

  ngOnInit() {
    this.trackRandom();
    this.albumRandom();
    this.artistRandom();
    this.playlistRandom();
  }

  albumRandom() {
    this.albumService.findRandom10Album().subscribe(data => {
      var val = Math.floor(Math.random() * (80 - 0)) + 0;
      this.albums = data.slice(val, val+10);
    });
  }

  artistRandom() {
    this.artistService.findRandom10Artist().subscribe(data => {
      var val = Math.floor(Math.random() * (80 - 0)) + 0;
      this.artists = data.slice(val, val+10);
    });
  }

  trackRandom() {
    this.trackService.findRandom10Track().subscribe(data => {
      var val = Math.floor(Math.random() * (80 - 0)) + 0;
      this.tracks = data.slice(val, val+10);
    });
  }

  playlistRandom() {
    this.playlistService.findRandom10Playlist().subscribe(data => {
      var val = Math.floor(Math.random() * (80 - 0)) + 0;
      this.playlists = data.slice(val, val+10);
    });
  }

}
