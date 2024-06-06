import { Component, OnInit } from '@angular/core';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { HomeCategoryComponent } from "../home-category/home-category.component";
import { Section } from '../../../shared/models/Section';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { Artist } from '../../../shared/models/Artist';
import { Album } from '../../../shared/models/Album';
import { Track } from '../../../shared/models/Track';
import { SpotifyPlaylist } from '../../../shared/models/SpotifyPlaylist';
import { DataService } from '../../../shared/services/Data.service';

@Component({
    selector: 'app-show-all',
    standalone: true,
    templateUrl: './show-all.component.html',
    styleUrls: ['./show-all.component.css'],
    imports: [MusicItemComponent, HomeCategoryComponent, CommonModule, ArtistItemComponent, AlbumItemComponent, PlaylistItemComponent]
})
export class ShowAllComponent implements OnInit {
  section: Section | undefined;
  sectionAny: any;
  artists: Artist[] | undefined;
  albums: Album[] | undefined;
  tracks: Track[] | undefined;
  playlists: SpotifyPlaylist[] | undefined;

  constructor(private dataService: DataService) { }

  initSectionVariable() {
    if(this.dataService.existDataStorage("sc_section")) {
      this.section = this.dataService.getOneData("sc_section");
    }
  }

  albumRandom() {
    if(this.dataService.existDataStorage("home_albums")) {
      this.albums = this.dataService.getData("home_albums");
      var val = Math.floor(Math.random() * (71 - 0)) + 0;
      this.albums = this.albums.slice(val, val+15);
    }
  }

  artistRandom() {
    if(this.dataService.existDataStorage("home_artists")) {
      this.artists = this.dataService.getData("home_artists");
      var val = Math.floor(Math.random() * (71 - 0)) + 0;
      this.artists = this.artists.slice(val, val+15);
    }
  }

  trackRandom() {
    if(this.dataService.existDataStorage("home_tracks")) {
      this.tracks = this.dataService.getData("home_tracks");
      var val = Math.floor(Math.random() * (71 - 0)) + 0;
      this.tracks = this.tracks.slice(val, val+15);
    }
  }

  playlistRandom() {
    if(this.dataService.existDataStorage("home_playlists")) {
      this.playlists = this.dataService.getData("home_playlists");
      var val = Math.floor(Math.random() * (71 - 0)) + 0;
      this.playlists = this.playlists.slice(val, val+15);
    }
  }

  ngOnInit() {
    this.initSectionVariable();
    this.trackRandom();
    this.albumRandom();
    this.artistRandom();
    this.playlistRandom();
  }

}
