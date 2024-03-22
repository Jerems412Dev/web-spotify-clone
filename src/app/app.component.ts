import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AudioPlayerComponent } from './core/components/audio-player/audio-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, FooterComponent, AudioPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-spotify-clone';
}
