import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TrackListenService } from '../../../shared/services/TrackListen.service';
import { Track } from '../../../shared/models/Track';
import { HttpClientModule } from '@angular/common/http';
import { Artist } from '../../../shared/models/Artist';
import { DataService } from '../../../shared/services/Data.service';
import { TrackListen } from '../../../shared/models/TrackListen';
import { RouterLink } from '@angular/router';
import { TrackService } from '../../../shared/services/Track.service';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  imports: [CommonModule, HttpClientModule,RouterLink]
})
export class AudioPlayerComponent implements AfterViewInit  {
  showPlay = false;
  @ViewChild('music') music: ElementRef | undefined;
  @ViewChild('volume') volume: ElementRef | undefined;
  @ViewChild('rangeInput') rangeInput: ElementRef | undefined;
  @ViewChild('currentTime') currentTime: ElementRef | undefined;
  @ViewChild('totalTime') totalTime: ElementRef | undefined;
  intervalId: any;
  isClickedLoop: boolean = false;
  isClickedRandom: boolean = false;
  isClickedMute: boolean = false;
  saveVolume: string = "";
  total = '';
  track: Track | undefined;
  tracks: Track[] | undefined;
  artist: Artist | undefined;
  tracklisten: TrackListen = {
    user: null,
    track: null,
    listenedAt: null,
    id: null
  };
  

  constructor(private trackService: TrackService,
              private data: DataService,
              private trackListenService: TrackListenService) {
    
  }
  ngOnInit(): void {
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
    if(this.isClickedRandom && !this.isClickedLoop) {
      this.randomTrack();
    }
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

  randomClick() {
    this.isClickedRandom = !this.isClickedRandom;
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
      event.preventDefault();
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

  lastListen() {
    const userJson = localStorage.getItem('userConnect');
    if (userJson) {
      const user = JSON.parse(userJson);
      const sub = user.sub;
      this.trackListenService.findLastTrackListen(sub).subscribe(data => {
        if(data) {
          this.track = data.track;
          this.loadSrcAudio(this.track?.profilePicture);
        }
      });
    }
  }

  addListenTrack() {
    this.tracklisten.track = this.track;
    this.tracklisten.user = this.data.getData("userConnect");
    this.trackListenService.createListen(this.tracklisten).subscribe(data => {
    });
  }

  nextTrack() {  
    this.tracks = this.data.getData("home_tracks");
    if(this.track?.idTrack < 86) {
      this.track = this.tracks[this.track?.idTrack];
    }else {
      this.track = this.tracks[0];
    }
    this.loadSrcAudio(this.track.profilePicture);
    this.reloadAudioElement();
  }

  randomTrack() {
    this.tracks = this.data.getData("home_tracks");
    this.track = this.tracks[Math.floor(Math.random() * (85 - 0)) + 0];
    this.loadSrcAudio(this.track.profilePicture);
    this.reloadAudioElement();
  }

  prevTrack() {
    this.tracks = this.data.getData("home_tracks");
    if(this.track?.idTrack > 1) {
      this.track = this.tracks[this.track?.idTrack-2];
    } else {
      this.track = this.tracks[85];
    }
    this.loadSrcAudio(this.track.profilePicture);
    this.reloadAudioElement();
  }

  reloadAudioElement() {

    this.showPlay = false;
    if (this.currentTime?.nativeElement && this.rangeInput?.nativeElement && this.music?.nativeElement) {
      this.currentTime.nativeElement.textContent = this.formatTime(0);
      this.rangeInput.nativeElement.value = '0';
      this.music.nativeElement.pause();
      this.music.nativeElement.currentTime = 0;
    }
    this.hogglePlayPauseDirective();
  }

  loadSrcAudio(src:string) {
    if(this.music?.nativeElement) {
      this.music.nativeElement.src = "assets/musics/"+src+".mp3";
    }
  }

  isSixHoursPassed(): boolean {
    const referenceDate = this.data.getOneData("exp");
    const currentDate = new Date();
    const differenceInMs = currentDate.getTime() - referenceDate.getTime();
    const differenceInMinutes = differenceInMs / (1000 * 60);
    const targetMinutes = (1 * 60) + 30;
    return differenceInMinutes >= targetMinutes;
  }

  favTrack() {
    let user = this.data.getOneData("userConnect");
    this.trackService.favTrackByUser(user.idUser,this.track?.idTrack).subscribe(data => {
    }); 
  }

  ngAfterViewInit() {
    this.lastListen();
    this.data.getTrackSelect()?.subscribe(track => {
      if(track) {
        this.track = track;
        this.loadSrcAudio(this.track?.profilePicture);
        this.reloadAudioElement();
        this.addListenTrack();
      }
    });
    this.showPlay = false;
  }
}
