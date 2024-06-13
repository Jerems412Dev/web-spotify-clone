import { Component, OnInit } from '@angular/core';
import { ArtistDetailsComponent } from "../artist-details/artist-details.component";
import { ListArtistSongComponent } from "../list-artist-song/list-artist-song.component";
import { ArtistCategoryComponent } from "../artist-category/artist-category.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { Artist } from '../../../shared/models/Artist';
import { Album } from '../../../shared/models/Album';
import { SpotifyPlaylist } from '../../../shared/models/SpotifyPlaylist';
import { CommonModule } from '@angular/common';
import { TrackService } from '../../../shared/services/Track.service';
import { Track } from '../../../shared/models/Track';
import { Section } from '../../../shared/models/Section';
import { EncryptionService } from '../../../shared/services/Encryption.service';
import { ArtistService } from '../../../shared/services/Artist.service';
import { filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-artist',
    standalone: true,
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css'],
    imports: [CommonModule,ArtistDetailsComponent, ListArtistSongComponent, ArtistCategoryComponent, AlbumItemComponent, ArtistItemComponent, PlaylistItemComponent]
})
export class ArtistComponent implements OnInit {
  artists: Artist[] | undefined;
  tracks: Track[] | undefined;
  artist: Artist | undefined;
  albums: Album[] | undefined;
  playlists: SpotifyPlaylist[] | undefined;
  hc_playlist: Section | undefined;
  hc_artist: Section | undefined;
  hc_album: Section | undefined;
  routerSubscription: Subscription | undefined;
  val: any;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private dataService: DataService,
              private trackService: TrackService,
              private artistService: ArtistService,
              private Encrypt: EncryptionService) {
                
              }

  findArtist() {
    this.route.fragment.subscribe(fragment => {
      this.artist = this.dataService.getData("home_artists").find(artist => artist.nameArtist === this.Encrypt.decrypt(fragment || ''));
    });
  }

  albumRandom() {
    if(this.dataService.existDataStorage("home_albums")) {
      this.albums = this.dataService.getData("home_albums");
      var val = Math.floor(Math.random() * (76 - 0)) + 0;
      this.albums = this.albums.slice(val, val+10);
    }
  }

  artistRandom() {
    if(this.dataService.existDataStorage("home_artists")) {
      this.artists = this.dataService.getData("home_artists");
      var val = Math.floor(Math.random() * (76 - 0)) + 0;
      this.artists = this.artists.slice(val, val+10);
    }
  }

  playlistRandom() {
    if(this.dataService.existDataStorage("home_playlists")) {
      this.playlists = this.dataService.getData("home_playlists");
      var val = Math.floor(Math.random() * (76 - 0)) + 0;
      this.playlists = this.playlists.slice(val, val+10);
    }
  }

  trackList(nameArtist: string) {
    this.trackService.findTrackByNameArtist(nameArtist).subscribe(data => {
      this.tracks = data;
    });
  }

  initSectionVariables() {
    this.hc_playlist = {
      section: "Discovered on",
      type: "playlist",
      category: "null"
    };
    this.hc_artist = {
      section: "Fans also like",
      type: "artist",
      category: "null"
    };
    this.hc_album = {
      section: "Discography",
      type: "album",
      category: "null"
    };
  }

  isFollowing():boolean {
    const user : any = this.dataService.getData("userConnect");
    this.artistService.existsByIdArtistAndUsername(this.artist?.idArtist,user.sub).subscribe(data => {
      this.val = data;
    });
    return this.val;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.trackList(this.artist?.nameArtist);
      this.albumRandom();
      this.artistRandom();
      this.playlistRandom();
      this.initSectionVariables();
      //this.isFollowing();
  }

}
