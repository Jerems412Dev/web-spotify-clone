import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../shared/models/Track';
import { DataService } from '../../../shared/services/Data.service';
import { ArtistService } from '../../../shared/services/Artist.service';
import { Artist } from '../../../shared/models/Artist';

@Component({
  standalone: true,
  selector: 'app-list-artist-song',
  templateUrl: './list-artist-song.component.html',
  styleUrls: ['./list-artist-song.component.css'],
  imports: [CommonModule]
})
export class ListArtistSongComponent implements OnInit {
  showPlayPlaylist = false;
  tableTr = [1, 2, 3, 4];
  seeMoreLessContent = "See more";
  @Input("tracks") tracks: Track[] | undefined;
  @Input("artist") artist: Artist | undefined;
  @Input("isFollow") isFollow: boolean = false;
  track: Track | undefined;
  nb = 0;
  listen: number = Math.floor(Math.random() * (50000000 - 5000)) + 5000;

  constructor(private dataService: DataService,
              private artistService: ArtistService) { }

  hogglePlayPausePlaylist() {
    this.showPlayPlaylist = !this.showPlayPlaylist;
  }

  seeMoreLess() {
    if(this.tableTr.length == 4) {
      this.tableTr = [1, 2, 3, 4, 5, 6, 7, 8];
      this.seeMoreLessContent = "See less";
    }else {
      this.tableTr = [1, 2, 3, 4];
      this.seeMoreLessContent = "See more";
    }
  }

  Following() {
    const user : any = this.dataService.getData("userConnect");
    this.artistService.favArtistByUser(user.idUser,this.artist?.idArtist).subscribe(data => {
      this.isFollow = true;
      if(this.artist) {
        this.dataService.setArtistSelect(this.artist);
      }
    });
  }

  isFollowing() {
    const user : any = this.dataService.getData("userConnect");
    this.artistService.existsByIdArtistAndUsername(this.artist?.idArtist,user.sub).subscribe(data => {
      if(data) {
        this.isFollow = data;
      }else {
        this.isFollow = data;
      }
    });
  }

  deleteFollowing() {
    const user : any = this.dataService.getData("userConnect");
    this.dataService.getArtistSelect().subscribe(artist => {
      this.artistService.deleteArtistUser(user.sub,artist.nameArtist).subscribe(data => {
        this.isFollow = false;
      });
    });
  }

  stopEventSvg(track: Track) {
    this.dataService.setTrackSelect(track);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
  }

}
