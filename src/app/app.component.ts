import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet  } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AudioPlayerComponent } from './core/components/audio-player/audio-player.component';
import { HomeComponent } from "./protected/home/home/home.component";
import { SqueletonComponent } from './core/components/squeleton/squeleton.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [SqueletonComponent,CommonModule, RouterOutlet, SidebarComponent, FooterComponent, AudioPlayerComponent, HomeComponent]
})
export class AppComponent {
  auth = false;
  title = 'web-spotify-clone';

  constructor(private router:Router) {
    
  }

  isAuth(): boolean {
    if(this.router.url !== '/register' && this.router.url !== '/') {
      this.auth =true;
    }
    return this.auth;
  }

}
