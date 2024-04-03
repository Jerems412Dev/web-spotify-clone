import { Component, OnInit } from '@angular/core';
import { AlbumDetailsComponent } from "../album-details/album-details.component";
import { ListAlbumSongComponent } from "../list-album-song/list-album-song.component";

@Component({
    selector: 'app-album',
    standalone: true,
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    imports: [AlbumDetailsComponent, ListAlbumSongComponent]
})
export class AlbumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
