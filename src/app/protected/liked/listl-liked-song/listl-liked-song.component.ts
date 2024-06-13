import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../shared/services/Track.service';
import { Track } from '../../../shared/models/Track';
import { DataService } from '../../../shared/services/Data.service';
import { RouterLink } from '@angular/router';
import { EncryptionPipe } from '../../../shared/pipes/encryption.pipe';

@Component({
  selector: 'app-listl-liked-song',
  standalone: true,
  templateUrl: './listl-liked-song.component.html',
  styleUrls: ['./listl-liked-song.component.css'],
  imports: [CommonModule,RouterLink,EncryptionPipe]
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

  stopEventSvg(track: Track) {
    if(track) {
      this.data.setTrackSelect(track);
    }
  }

  ngOnInit() {
    this.findTrackLiked();
  }

}
