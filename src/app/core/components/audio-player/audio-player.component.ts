import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  imports: [CommonModule]
})
export class AudioPlayerComponent implements OnInit {
  showPlay = false;
  @ViewChild('music') music: ElementRef | undefined;
  @ViewChild('rangeInput') range: ElementRef | undefined;
  currTime =  "0";
  totalTime = "0";
  limitedInterval : any;

  constructor() {}

  hogglePlayPauseDirective() {
    this.showPlay = !this.showPlay;
    this.playMusic();
  }

  playMusic() {
    if(this.showPlay) {
      this.music?.nativeElement.play();
    }else {
      this.music?.nativeElement.pause();
    }
  }

  /*seekUpdate() {
    if (!isNaN(this.music?.nativeElement.duration)) {
      let currentMinutes = Math.floor(this.music?.nativeElement.currentTime / 60);
      let currentSeconds = Math.floor(this.music?.nativeElement.currentTime - currentMinutes * 60);
       this.currTime = currentMinutes + ":" + currentSeconds;
    }
  }

  loadeddata() {
    this.range?.nativeElement.value = 0;
    let durationMinutes = Math.floor(this.music?.nativeElement.duration / 60);
    let durationSeconds = Math.floor(this.music?.nativeElement.duration - durationMinutes * 60);
    this.totalTime = durationMinutes + ":" + durationSeconds;
  }*/

  ngOnInit() {
  }

}
