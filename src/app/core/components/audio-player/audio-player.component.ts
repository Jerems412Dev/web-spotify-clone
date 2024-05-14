import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TrackListenService } from '../../../shared/services/TrackListen.service';
import { Track } from '../../../shared/models/Track';
import { HttpClientModule } from '@angular/common/http';
import { Artist } from '../../../shared/models/Artist';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class AudioPlayerComponent implements OnInit {
  showPlay = false;
  @ViewChild('music') music: ElementRef | undefined;
  @ViewChild('volume') volume: ElementRef | undefined;
  @ViewChild('rangeInput') rangeInput: ElementRef | undefined;
  @ViewChild('currentTime') currentTime: ElementRef | undefined;
  @ViewChild('totalTime') totalTime: ElementRef | undefined;
  intervalId: any;
  isClickedLoop: boolean = false;
  isClickedMute: boolean = false;
  saveVolume: string = "";
  total = '';
  track: Track | undefined;
  artist: Artist | undefined;

  constructor(private trackService: TrackListenService) {
    
  }

  hogglePlayPauseDirective() {
    this.showPlay = !this.showPlay;
    this.playMusic();
  }

  playMusic() {
    if(this.showPlay) {
      this.music?.nativeElement.play();
      this.loadTotalTime();
      this.seekUpdate();
    }else {
      this.music?.nativeElement.pause();
    }
  }

  endedMusic() {
    this.showPlay = false;
  }

  loopClick() {
    this.isClickedLoop = !this.isClickedLoop;
    switch (this.music?.nativeElement.loop) {
      case false:
        this.music.nativeElement.loop = true;
        break;
      case true:
        this.music.nativeElement.loop = false;
        break;
    }
  }

  muteVolumeClick() {
    this.isClickedMute = !this.isClickedMute;
    switch (this.music?.nativeElement.volume) {
      case !"0":
        this.music.nativeElement.volume = "0";
        break;
      case true:
        this.music.nativeElement.loop = false;
        break;
    }
  }

  @HostListener('window:keydown.space', ['$event'])
  pauseAudioWithSpaceButton(event: KeyboardEvent) {
    if (event.code === 'Space' && !this.isFocusOnTextInput()) {
      this.hogglePlayPauseDirective();
    }
  }

  isFocusOnTextInput(): boolean {
    const activeElement = document.activeElement;
    return activeElement?.tagName === 'INPUT' && (activeElement as HTMLInputElement).type === 'text';
  }

  volumeChange(event: Event) {
    (this.music?.nativeElement) ? this.music.nativeElement.volume = (event.target as HTMLInputElement).value : null;
    if(this.volume?.nativeElement.value != 0) {
      this.isClickedMute = false;
    }else {
      this.isClickedMute = true;
    }
  }

  blockVolume() {
    this.isClickedMute = !this.isClickedMute;
    if(this.music?.nativeElement.volume != "0"){
      this.saveVolume = this.music?.nativeElement.volume;
      (this.volume?.nativeElement) ? this.volume.nativeElement.value = 0 : null;
      (this.music?.nativeElement.volume) ? this.music.nativeElement.volume = 0 : null;
    }else{
      (this.music.nativeElement) ? this.music.nativeElement.volume = this.saveVolume : null;
      (this.volume?.nativeElement) ? this.volume.nativeElement.value = this.saveVolume : null;
    }
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  loadTotalTime() {
    this.total = this.formatTime(this.music?.nativeElement.duration);
  }

  seekUpdate() {
    this.intervalId = setInterval(() => {
      if (!this.music?.nativeElement.paused) {
        if (this.currentTime?.nativeElement && this.rangeInput?.nativeElement) {
          this.currentTime.nativeElement.textContent = this.formatTime(this.music?.nativeElement.currentTime);
          this.rangeInput.nativeElement.value = (this.music?.nativeElement.currentTime / this.music?.nativeElement.duration * 100).toString();
        }
      }
    }, 1000);
  }

  updatedRange() {
    if (!this.music?.nativeElement.paused) {
      if (this.music?.nativeElement && this.rangeInput?.nativeElement) {
        this.music.nativeElement.currentTime = (this.music.nativeElement.duration || 0) * this.rangeInput?.nativeElement.value / 100;
      }
    }
  }

  ngOnInit() {
    this.trackService.findLastTrackListen("jerems").subscribe(data => {
      this.track = data.track;
    });
  }
}
