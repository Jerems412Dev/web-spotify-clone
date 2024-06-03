import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Track } from '../../models/Track';
import { Artist } from '../../models/Artist';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MusicItemComponent implements OnInit {
  @ViewChild('playButton') playButton: ElementRef | undefined;
  @ViewChild('pauseButton') pauseButton: ElementRef | undefined;
  @Input("track") track: Track | undefined;
  artist: Artist | undefined;
  showPlayButton = true;
  showPauseButton = false;

  constructor(private data: DataService,
              private renderer: Renderer2) { }

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

  onMouseEnterPause() {
    if(this.pauseButton?.nativeElement) {
      this.pauseButton.nativeElement.style.opacity = "1";
      this.pauseButton.nativeElement.style.marginLeft = "56%";
    }
  }

  onMouseLeavePause() {
    if(this.pauseButton?.nativeElement) {
      this.pauseButton.nativeElement.style.opacity = "0";
      this.pauseButton.nativeElement.style.marginLeft = "0";
    }
  }

  stopEventSvg() {
    if(this.track) {
      this.data.setTrackSelect(this.track);
    }
  }

  ngOnInit() {

  }

}
