import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/Data.service';
import { Track } from '../../../shared/models/Track';
import { debounceTime } from 'rxjs/operators';
import { RouterLink } from '@angular/router';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { UserPlaylistService } from '../../../shared/services/UserPlaylist.service';
import { EncryptionPipe } from '../../../shared/pipes/encryption.pipe';

@Component({
  selector: 'app-list-recommanded-song',
  standalone: true,
  templateUrl: './list-recommanded-song.component.html',
  styleUrls: ['./list-recommanded-song.component.css'],
  imports: [CommonModule,RouterLink,EncryptionPipe]
})
export class ListRecommandedSongComponent implements OnInit {
  isShowDiv = false;
  tracks: Track[] | undefined;
  @Input("playlist") playlist: UserPlaylist | undefined;
  tracksSearch: Track[] | undefined;
  nb_track = 0;
  val = 0;

  constructor(private data: DataService,private userPlaylistService: UserPlaylistService) { }

  toggleDiv() {
    this.isShowDiv = !this.isShowDiv;
    this.tracksSearch = [];
  }

  findTrack(value: string) {
    this.tracksSearch = this.data.getData("home_tracks").filter(track =>
      track.titleTrack.toLowerCase().includes(value.toLowerCase()) ||
      track.artists[0].nameArtist.toLowerCase().includes(value.toLowerCase())
    );
    this.nb_track = this.tracksSearch.length;
  }

  onInputChange(event: any): void {
    debounceTime(900);
    this.checkIfWriting(event.target.value);
  }

  checkIfWriting(value: string): void {
    if(/\S/.test(value) && value.length > 1) {
      this.findTrack(value);
    }else {
      this.nb_track = 0;
      this.tracksSearch = [];
    } 
  }

  stopEventSvg(track: Track,event: MouseEvent) {
    event.stopPropagation();
    if(track) {
      this.data.setTrackSelect(track);
    }
  }

  addTrackOnPlaylist(track: Track) {
    this.userPlaylistService.addTrackOnPlaylist(this.playlist?.idUserPlaylist,track.idTrack).subscribe(data => {
      this.tracks = this.tracks?.filter(trackFilter =>
        trackFilter.titleTrack != track.titleTrack);
    });
    this.data.setTrackAddPlaylistSelect(track);
  }

  ngOnInit() {
    let max = Math.floor(this.data.getData("home_tracks").length)-6;
    this.val = Math.floor(Math.random() * (max - 0)) + 0;
    this.tracks = this.data.getData("home_tracks");
  }

}
