import { Component, OnInit } from '@angular/core';
import { ArtistDetailsComponent } from "../artist-details/artist-details.component";
import { ListArtistSongComponent } from "../list-artist-song/list-artist-song.component";
import { ArtistCategoryComponent } from "../artist-category/artist-category.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";

@Component({
    selector: 'app-artist',
    standalone: true,
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css'],
    imports: [ArtistDetailsComponent, ListArtistSongComponent, ArtistCategoryComponent, AlbumItemComponent, ArtistItemComponent, PlaylistItemComponent]
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
