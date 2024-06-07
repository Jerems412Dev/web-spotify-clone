import { AfterViewInit, Component } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  auth : boolean = false;
  title = 'web-spotify-clone';

  constructor(private tokenService: TokenService) {
    
  }

  ngAfterViewInit() {
    
  }

  ngOnInit(){
    
  }

  isAuth(): boolean {
    this.tokenService.isAuthenticatedUser().subscribe(isAuthenticated => {
      this.auth = isAuthenticated;
    });
    return this.auth;
  }
}
