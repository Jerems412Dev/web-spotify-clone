import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Artist } from '../../models/Artist';

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
