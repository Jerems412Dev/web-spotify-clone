import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../../shared/services/Data.service';

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
  background: any | undefined;
  
  constructor(private router: Router,private route: ActivatedRoute,private data: DataService) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (this.right?.nativeElement) ? this.right.nativeElement.scrollTop = 0 : null;
        this.rightBackgroundColor();
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

  rightBackgroundColor() {
    if(this.right?.nativeElement) {
      if(this.router.url === '/genre') {
        this.right.nativeElement.style.background = "linear-gradient(360deg, #1f1f1f 55%,"+this.data.getOneData("backgroundColor")+" 100%)";
      }else {
        this.right.nativeElement.style.background = "#1f1f1f";
      }
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

} 
