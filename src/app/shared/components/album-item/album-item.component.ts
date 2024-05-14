import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class AlbumItemComponent implements OnInit {
  @ViewChild('playButton') playButton: ElementRef | undefined;
  @Input("album") album: Album | undefined;

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
