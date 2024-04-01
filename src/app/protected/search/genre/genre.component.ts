import { Component, OnInit } from '@angular/core';
import { SearchCategoryComponent } from "../search-category/search-category.component";
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";

@Component({
    standalone: true,
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css'],
    imports: [SearchCategoryComponent, MusicItemComponent, PlaylistItemComponent, AlbumItemComponent, ArtistItemComponent]
})
export class GenreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
