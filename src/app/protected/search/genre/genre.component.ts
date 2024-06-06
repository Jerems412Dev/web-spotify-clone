import { Component, OnInit } from '@angular/core';
import { SearchCategoryComponent } from "../search-category/search-category.component";
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { DataService } from '../../../shared/services/Data.service';
import { Category } from '../../../shared/models/Category';
import { Track } from '../../../shared/models/Track';
import { Album } from '../../../shared/models/Album';
import { Artist } from '../../../shared/models/Artist';
import { CommonModule } from '@angular/common';
import { Section } from '../../../shared/models/Section';

@Component({
    standalone: true,
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css'],
    imports: [SearchCategoryComponent, MusicItemComponent, PlaylistItemComponent, AlbumItemComponent, ArtistItemComponent,CommonModule]
})
export class GenreComponent implements OnInit {
  category: Category | undefined;
  tracks: Track[] | undefined;
  albums: Album[] | undefined;
  artists: Artist[] | undefined;
  hc_track: Section | undefined;
  hc_artist: Section | undefined;
  hc_album: Section | undefined;

  constructor(private data: DataService) { }

  getCategory() {
    this.category = this.data.getOneData("gd_category");
  }

  findTrackByCategory() {
    this.tracks = this.data.getData("home_tracks").filter(track =>
      track.categories.some((category: { nameCategory: string; }) => category.nameCategory === this.category?.nameCategory)
    );
  }

  findAlbumByCategory() {
    this.albums = this.data.getData("home_albums").filter(album =>
      album.categories.some((category: { nameCategory: string; }) => category.nameCategory === this.category?.nameCategory)
    );
  }

  findArtistByCategory() {
    this.artists = this.data.getData("home_artists").filter(artist =>
      artist.categories.some((category: { nameCategory: string; }) => category.nameCategory === this.category?.nameCategory)
    );
  }

  initSectionVariables() {
    this.hc_track = {
      section: "Your top "+this.category?.nameCategory,
      type: "track",
      category: this.category?.nameCategory
    };
    this.hc_artist = {
      section: this.category?.nameCategory+" artists",
      type: "artist",
      category: this.category?.nameCategory
    };
    this.hc_album = {
      section: this.category?.nameCategory+" albums",
      type: "album",
      category: this.category?.nameCategory
    };
  }

  ngOnInit() {
    this.getCategory();
    this.findTrackByCategory();
    this.findAlbumByCategory();
    this.findArtistByCategory();
    this.initSectionVariables();
  }

}
