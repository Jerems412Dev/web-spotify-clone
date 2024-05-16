import { Component, OnInit } from '@angular/core';
import { ArtistDetailsComponent } from "../artist-details/artist-details.component";
import { ListArtistSongComponent } from "../list-artist-song/list-artist-song.component";
import { ArtistCategoryComponent } from "../artist-category/artist-category.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { Artist } from '../../../shared/models/Artist';
import { Album } from '../../../shared/models/Album';
import { SpotifyPlaylist } from '../../../shared/models/SpotifyPlaylist';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../../shared/services/Artist.service';
import { TrackService } from '../../../shared/services/Track.service';
import { Track } from '../../../shared/models/Track';

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

  constructor(private route: ActivatedRoute, 
              private dataService: DataService,
              private artistService: ArtistService,
              private trackService: TrackService) {}

  findArtist() {
    this.route.fragment.subscribe(fragment => {
      this.artistService.findByNameArtist(fragment).subscribe(data => {
        this.artist = data;
        this.trackList(this.artist.nameArtist);
      });
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

  Following(idArtist: number) {
    const user : any = this.dataService.getData("userConnect");
    this.artistService.favArtistByUser(user.idUser,idArtist).subscribe(data => {
    });
  }

  ngOnInit() {
    this.albumRandom();
    this.artistRandom();
    this.playlistRandom();
    this.findArtist();
  }

}
