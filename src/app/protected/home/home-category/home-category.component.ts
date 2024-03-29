import { Component, OnInit } from '@angular/core';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { ArtistItemComponent } from '../../../shared/components/artist-item/artist-item.component';

@Component({
    selector: 'app-home-category',
    standalone: true,
    templateUrl: './home-category.component.html',
    styleUrls: ['./home-category.component.css'],
    imports: [MusicItemComponent, ArtistItemComponent]
})
export class HomeCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
