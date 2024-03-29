import { Directive, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appUpdateAudioTime]',
  standalone: true
})
export class UpdateAudioTimeDirective implements OnInit, OnDestroy {
  @ViewChild('music') audioElement: ElementRef | undefined;
  intervalId: any;

  constructor() {}
  
  @HostListener('click')
  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (!this.audioElement?.nativeElement.paused) {
        const currentTimeSpan = document.getElementById('currentTime');
        const totalTimeSpan = document.getElementById('totalTime');
        const rangeInput = document.getElementById('audioRange') as HTMLInputElement;

        if (currentTimeSpan && totalTimeSpan && rangeInput && this.audioElement?.nativeElement) {
          currentTimeSpan.textContent = this.formatTime(this.audioElement?.nativeElement.currentTime);
          totalTimeSpan.textContent = this.formatTime(this.audioElement?.nativeElement.duration);
          rangeInput.value = (this.audioElement?.nativeElement.currentTime / this.audioElement?.nativeElement.duration * 100).toString();
        }
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
