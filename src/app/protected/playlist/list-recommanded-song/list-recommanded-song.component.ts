import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recommanded-song',
  standalone: true,
  templateUrl: './list-recommanded-song.component.html',
  styleUrls: ['./list-recommanded-song.component.css'],
  imports: [CommonModule]
})
export class ListRecommandedSongComponent implements OnInit {
  isShowDiv = false;

  toggleDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  constructor() { }

  ngOnInit() {
  }

}
