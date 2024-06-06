import { Component, Input, OnInit } from '@angular/core';
import { SearchCategoryComponent } from '../search-category/search-category.component';
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { RecentlyItemComponent } from "../../../shared/components/recently-item/recently-item.component";
import { CommonModule } from '@angular/common';
import { Track } from '../../../shared/models/Track';
import { Album } from '../../../shared/models/Album';
import { Artist } from '../../../shared/models/Artist';
import { DataService } from '../../../shared/services/Data.service';

@Component({
    standalone: true,
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css'],
    imports: [CommonModule, SearchCategoryComponent, PlaylistItemComponent, AlbumItemComponent, ArtistItemComponent, RecentlyItemComponent]
})
export class SearchResultComponent implements OnInit {
  value: any;
  tracks: Track[] | undefined;
  albums: Album[] | undefined;
  artists: Artist[] | undefined;
  nb_track: number = 0;
  nb_album: number = 0;
  nb_artist: number = 0;

  constructor(private data: DataService) { 
    this.data.getSearchSelect().subscribe(data => {
      if(data) {
        this.value = data;
        this.findAlbum();
        this.findArtist();
        this.findTrack();
      }
    });
  }

  findTrack() {
    this.tracks = this.data.getData("home_tracks").filter(track =>
      track.titleTrack.toLowerCase().includes(this.value?.toLowerCase()) ||
      track.artists[0].nameArtist.toLowerCase().includes(this.value?.toLowerCase())
    );
    this.nb_track = this.tracks.length;
  }

  findAlbum() {
    this.albums = this.data.getData("home_albums").filter(album =>
      album.titleAlbum.toLowerCase().includes(this.value?.toLowerCase()) ||
      album.artist.nameArtist.toLowerCase().includes(this.value?.toLowerCase())
    );
    this.nb_album = this.albums.length;
  }

  findArtist() {
    this.artists = this.data.getData("home_artists").filter(artist =>
      artist.nameArtist.toLowerCase().includes(this.value?.toLowerCase())
    );
    this.nb_artist = this.artists.length;
  }

  playTrack(track: Track,event: MouseEvent) {
    event.stopPropagation();
    if(track) {
      this.data.setTrackSelect(track);
    }
  }

  ngOnInit() {
  }

}
