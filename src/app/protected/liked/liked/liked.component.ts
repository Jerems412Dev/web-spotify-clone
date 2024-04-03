import { Component, OnInit } from '@angular/core';
import { LikedDetailsComponent } from "../liked-details/liked-details.component";
import { ListlLikedSongComponent } from "../listl-liked-song/listl-liked-song.component";

@Component({
    selector: 'app-liked',
    standalone: true,
    templateUrl: './liked.component.html',
    styleUrls: ['./liked.component.css'],
    imports: [LikedDetailsComponent, ListlLikedSongComponent]
})
export class LikedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
