import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { DataService } from '../../../shared/services/Data.service';
import { EncryptionPipe } from '../../../shared/pipes/encryption.pipe';
import { RouterLink } from '@angular/router';
import { Track } from '../../../shared/models/Track';

@Component({
    selector: 'app-list-playlist-song',
    standalone: true,
    templateUrl: './list-playlist-song.component.html',
    styleUrls: ['./list-playlist-song.component.css'],
    imports: [CommonModule,EncryptionPipe,RouterLink]
})
export class ListPlaylistSongComponent implements OnInit {
  showPlayPlaylist = false;
  @Input("playlist") playlist : UserPlaylist | undefined;
  nb = 0;

  constructor(private data: DataService) { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  playTrack(track: Track,event: MouseEvent) {
    event.stopPropagation();
    if(track) {
      this.data.setTrackSelect(track);
    }
  }

  ngOnInit() {
    this.data.getTrackAddPlaylistSelect().subscribe(data => {
      if(data) {
        const isTrackAlreadyInPlaylist = this.playlist?.tracks.some(track => track.idTrack === data.idTrack);
        if (!isTrackAlreadyInPlaylist) {
          this.playlist?.tracks.push(data);
        }
      }
    });
  }

}
