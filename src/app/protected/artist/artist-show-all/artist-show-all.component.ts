import { Component, OnInit } from '@angular/core';
import { ArtistCategoryComponent } from "../artist-category/artist-category.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";

@Component({
    standalone: true,
    selector: 'app-artist-show-all',
    templateUrl: './artist-show-all.component.html',
    styleUrls: ['./artist-show-all.component.css'],
    imports: [ArtistCategoryComponent, PlaylistItemComponent]
})
export class ArtistShowAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
