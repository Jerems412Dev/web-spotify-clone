import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../shared/services/Track.service';
import { Track } from '../../../shared/models/Track';
import { DataService } from '../../../shared/services/Data.service';

@Component({
  selector: 'app-listl-liked-song',
  standalone: true,
  templateUrl: './listl-liked-song.component.html',
  styleUrls: ['./listl-liked-song.component.css'],
  imports: [CommonModule]
})
export class ListlLikedSongComponent implements OnInit {
  showPlayPlaylist = false;
  tracks: Track[] | undefined;

  constructor(private trackService: TrackService,
              private data: DataService) { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  findTrackLiked() {
    let user: any = this.data.getOneData("userConnect");
    this.trackService.findTrackByUsername(user.sub).subscribe(list => {
      this.tracks = list;
    });
  }

  ngOnInit() {
    this.findTrackLiked();
  }

}
