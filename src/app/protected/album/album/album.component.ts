import { Component, OnInit } from '@angular/core';
import { AlbumDetailsComponent } from "../album-details/album-details.component";
import { ListAlbumSongComponent } from "../list-album-song/list-album-song.component";
import { Album } from '../../../shared/models/Album';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { Track } from '../../../shared/models/Track';
import { TrackService } from '../../../shared/services/Track.service';
import { EncryptionService } from '../../../shared/services/Encryption.service';

@Component({
    selector: 'app-album',
    standalone: true,
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    imports: [AlbumDetailsComponent, ListAlbumSongComponent]
})
export class AlbumComponent implements OnInit {
  album: Album | undefined;
  tracks: Track[] | undefined;

  constructor(private route: ActivatedRoute, 
              private trackService: TrackService,
              private dataService: DataService,
              private encrypt: EncryptionService) { }

  findAlbum() {
    this.route.fragment.subscribe(fragment => {
      if(fragment) {
        this.album = this.dataService.getData("home_albums").find(album => album.titleAlbum === this.encrypt.decrypt(fragment || ''));
        this.findTracks(this.album?.titleAlbum);
      }
    });
  }

  findTracks(title: string) {
    this.trackService.findTrackByTitleAlbum(title).subscribe(data => {
      this.tracks = data;
    });
  }

  ngOnInit() {
    this.findAlbum();
  }

}
