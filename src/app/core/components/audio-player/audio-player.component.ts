import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  imports: [CommonModule]
})
export class AudioPlayerComponent implements OnInit {
  showPlay = false;

  constructor() { }

  hogglePlayPauseDirective() {
    this.showPlay = !this.showPlay;
  }

  ngOnInit() {
  }

}
