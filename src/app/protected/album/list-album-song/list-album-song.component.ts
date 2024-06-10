import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../shared/models/Track';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/Data.service';
import { Album } from '../../../shared/models/Album';
import { AlbumService } from '../../../shared/services/Album.service';

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
  @Input("album") album: Album | undefined;
  track: Track | undefined;

  constructor(private dataService: DataService,private albumService:AlbumService) { }

  isShowVerif() {
    this.isShow = !this.isShow;
  }

  stopEventSvg(track: Track) {
    this.dataService.setTrackSelect(track);
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    var tracks : Track[] = this.dataService.getData("home_tracks");
    this.track = tracks.find(track => track.album.titleAlbum === this.album?.titleAlbum);
    if(this.track) {
      this.dataService.setTrackSelect(this.track);
    }   
  }

  existLike() {
    let user = this.dataService.getOneData("userConnect");
    this.albumService.existsByTitleAlbumAndUsername(user.sub,this.album?.titleAlbum).subscribe(data => {
    })
  }

  favAlbum() {
    let user = this.dataService.getOneData("userConnect");
    this.albumService.favAlbumByUser(user.idUser,this.album?.idAlbum).subscribe(data => {
      if(this.album) {
        this.dataService.setAlbumSelect(this.album);
      }
    }); 
  }

  ngOnInit() {
    this.existLike()
  }

}
