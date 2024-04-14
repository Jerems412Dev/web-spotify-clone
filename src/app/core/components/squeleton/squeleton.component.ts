import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-squeleton',
  templateUrl: './squeleton.component.html',
  styleUrls: ['./squeleton.component.css'],
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AudioPlayerComponent,CommonModule]
})
export class SqueletonComponent implements OnInit,OnDestroy {
  @ViewChild('content') content: ElementRef | undefined;
  @ViewChild('right') right: ElementRef | undefined;
  private routerSubscription: Subscription | undefined;
  
  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (this.right?.nativeElement) ? this.right.nativeElement.scrollTop = 0 : null;
      }
    });
  }

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

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

}
