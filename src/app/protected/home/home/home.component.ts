import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { SidebarComponent } from "../../../core/components/sidebar/sidebar.component";
import { AudioPlayerComponent } from "../../../core/components/audio-player/audio-player.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [FooterComponent, NavbarComponent, SidebarComponent, AudioPlayerComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
