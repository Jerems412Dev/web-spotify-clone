import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Artist } from '../../models/Artist';
import { Track } from '../../models/Track';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ArtistItemComponent implements OnInit {
  @ViewChild('playButton') playButton: ElementRef | undefined;
  @Input("artist") artist: Artist | undefined;
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
    this.track = tracks.find(track => track.artists[0].nameArtist === this.artist?.nameArtist);
    if(this.track) {
      this.data.setTrackSelect(this.track);
    }
  }

  ngOnInit() {
  }

}
