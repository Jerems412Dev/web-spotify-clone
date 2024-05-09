import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet  } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AudioPlayerComponent } from './core/components/audio-player/audio-player.component';
import { HomeComponent } from "./protected/home/home/home.component";
import { SqueletonComponent } from './core/components/squeleton/squeleton.component';
import { TokenService } from './shared/services/Token.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [SqueletonComponent,CommonModule, RouterOutlet, SidebarComponent, FooterComponent, AudioPlayerComponent, HomeComponent]
})
export class AppComponent {
  auth : boolean = false;
  title = 'web-spotify-clone';

  constructor(private tokenService: TokenService) {}

  isAuth(): boolean {
    if(this.tokenService.isAuthenticatedUser()) {
      this.auth =true;
    }else {
      this.auth = false;
    }
    return this.auth;
  }
}
