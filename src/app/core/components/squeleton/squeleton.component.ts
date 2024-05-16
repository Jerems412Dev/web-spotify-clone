import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-squeleton',
  templateUrl: './squeleton.component.html',
  styleUrls: ['./squeleton.component.css'],
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AudioPlayerComponent,CommonModule]
})
export class SqueletonComponent implements OnInit,OnDestroy,AfterViewInit {
  @ViewChild('content') content: ElementRef | undefined;
  @ViewChild('right') right: ElementRef | undefined;
  private routerSubscription: Subscription | undefined;
  
  constructor(private router: Router,private route: ActivatedRoute) {
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

  paddingContent() {
    if(this.router.url.slice(0,7) === '/artist') {
      return true
    }
    return false;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //this.paddingContent();
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

} 
