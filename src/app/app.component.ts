import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AudioPlayerComponent } from './core/components/audio-player/audio-player.component';
import { HomeComponent } from "./protected/home/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SidebarComponent, FooterComponent, AudioPlayerComponent, HomeComponent]
})
export class AppComponent {
  title = 'web-spotify-clone';
}
