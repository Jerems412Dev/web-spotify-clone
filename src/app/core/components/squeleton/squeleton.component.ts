import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squeleton',
  templateUrl: './squeleton.component.html',
  styleUrls: ['./squeleton.component.css'],
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AudioPlayerComponent,CommonModule]
})
export class SqueletonComponent implements OnInit {
  @ViewChild('content') content: ElementRef | undefined;
  constructor(private router: Router) { }

  activeMarginHome(): boolean {
    if(this.router.url === '/home') {
      return true
    }
    return false;
  }

  activeMarginOther(): boolean {
    if(this.router.url !== '/home') {
      return true
    }
    return false;
  }

  ngOnInit() {

  }

}
