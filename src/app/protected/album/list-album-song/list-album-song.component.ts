import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../shared/models/Track';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';

@Component({
  selector: 'app-list-album-song',
  standalone: true,
  templateUrl: './list-album-song.component.html',
  styleUrls: ['./list-album-song.component.css'],
  imports: [CommonModule,RouterLink]
})
export class ListAlbumSongComponent implements OnInit {
  isShow = false;
  @Input("tracks") tracks: Track[] | undefined;
  track: Track | undefined;

  constructor(private dataService: DataService) { }

  isShowVerif() {
    this.isShow = !this.isShow;
  }

  stopEventSvg(track: Track) {
    this.dataService.setTrackSelect(track);
  }

  ngOnInit() {
  }

}
