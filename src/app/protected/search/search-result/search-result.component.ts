import { Component, OnInit } from '@angular/core';
import { SearchCategoryComponent } from '../search-category/search-category.component';
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { RecentlyItemComponent } from "../../../shared/components/recently-item/recently-item.component";

@Component({
    standalone: true,
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css'],
    imports: [SearchCategoryComponent, PlaylistItemComponent, AlbumItemComponent, ArtistItemComponent, RecentlyItemComponent]
})
export class SearchResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}