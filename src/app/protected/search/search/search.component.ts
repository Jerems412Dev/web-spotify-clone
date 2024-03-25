import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../../core/components/sidebar/sidebar.component";
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { AudioPlayerComponent } from "../../../core/components/audio-player/audio-player.component";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    imports: [SidebarComponent, NavbarComponent, FooterComponent, AudioPlayerComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
