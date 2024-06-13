import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/Album';
import { Track } from '../../models/Track';
import { DataService } from '../../services/Data.service';
import { EncryptionPipe } from '../../pipes/encryption.pipe';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css'],
  standalone: true,
  imports: [RouterLink,EncryptionPipe]
})
export class AlbumItemComponent implements OnInit {
  @ViewChild('playButton') playButton: ElementRef | undefined;
  @Input("album") album: Album | undefined;
  track: Track | undefined;

  constructor(private data: DataService) { }

  onMouseEnter() {
    if(this.playButton?.nativeElement) {
      this.playButton.nativeElement.style.opacity = "1";
      this.playButton.nativeElement.style.marginLeft = "56%";
    }
  }

  onMouseLeave() {
    if(this.playButton?.nativeElement) {
      this.playButton.nativeElement.style.opacity = "0";
      this.playButton.nativeElement.style.marginLeft = "0";
    }
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    var tracks : Track[] = this.data.getData("home_tracks");
    this.track = tracks.find(track => track.album.titleAlbum === this.album?.titleAlbum);
    if(this.track) {
      this.data.setTrackSelect(this.track);
    }
  }

  ngOnInit() {
  }

}
