import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-album-song',
  standalone: true,
  templateUrl: './list-album-song.component.html',
  styleUrls: ['./list-album-song.component.css'],
  imports: [CommonModule]
})
export class ListAlbumSongComponent implements OnInit {
  isShow = false;

  constructor() { }

  isShowVerif() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
  }

}
