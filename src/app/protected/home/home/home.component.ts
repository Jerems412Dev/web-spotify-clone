import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';
import { HomeCategoryComponent } from '../home-category/home-category.component';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { ArtistItemComponent } from "../../../shared/components/artist-item/artist-item.component";
import { AlbumItemComponent } from "../../../shared/components/album-item/album-item.component";
import { PlaylistItemComponent } from "../../../shared/components/playlist-item/playlist-item.component";
import { RecentlyItemComponent } from "../../../shared/components/recently-item/recently-item.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [SqueletonComponent, HomeCategoryComponent, MusicItemComponent, ArtistItemComponent, AlbumItemComponent, PlaylistItemComponent, RecentlyItemComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
