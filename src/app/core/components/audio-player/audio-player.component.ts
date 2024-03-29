import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UpdateAudioTimeDirective } from '../../directives/updateAudioTime.directive';

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
  /*@ViewChild('rangeInput') range: ElementRef | undefined;
  @ViewChild('currentTime') currentTime: ElementRef | undefined;
  @ViewChild('totalTime') totalTime: ElementRef | undefined;*/
  intervalId: any;
  isClicked: boolean = false;

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

  loopClick() {
    this.isClicked = !this.isClicked;
    switch (this.music?.nativeElement.loop) {
      case false:
        this.music.nativeElement.loop = true;
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

  ngOnInit() {
  }

}
