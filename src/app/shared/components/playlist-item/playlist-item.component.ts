import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotifyPlaylist } from '../../models/SpotifyPlaylist';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class PlaylistItemComponent implements OnInit {
  @ViewChild('playButton') playButton: ElementRef | undefined;
  @Input("playlist") playlist: SpotifyPlaylist | undefined;

  constructor() { }

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

  ngOnInit() {
  }

}
