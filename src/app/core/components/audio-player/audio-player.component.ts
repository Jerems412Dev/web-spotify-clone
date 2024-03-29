import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('volume') volume: ElementRef | undefined;
  isClickedLoop: boolean = false;
  isClickedMute: boolean = false;
  saveVolume: string = "";

  constructor() {}

  hogglePlayPauseDirective() {
    this.showPlay = !this.showPlay;
    this.playMusic();
  }

  /*seekUpdate() {
    if (!isNaN(this.music?.nativeElement.duration)) {
      (this.currentTime?.nativeElement) ? this.currentTime.nativeElement.textContent = this.formatTime(this.music?.nativeElement.currentTime) : null;
    }
  }

  loadeddata() {
    if(this.range?.nativeElement) {
      this.range.nativeElement.value = 0;
    }
    alert("oui");
    (this.totalTime?.nativeElement) ? this.totalTime.nativeElement.innerText = this.formatTime(this.music?.nativeElement.duration) : null;
  }

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }*/

  playMusic() {
    if(this.showPlay) {
      this.music?.nativeElement.play();
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

  ngOnInit() {
  }

}
