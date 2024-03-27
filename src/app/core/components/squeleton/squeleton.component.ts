import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-squeleton',
  templateUrl: './squeleton.component.html',
  styleUrls: ['./squeleton.component.css'],
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AudioPlayerComponent]
})
export class SqueletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
