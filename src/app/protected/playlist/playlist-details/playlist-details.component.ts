import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../../core/directives/clickOutside.directive';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css'],
  imports: [CommonModule,ClickOutsideDirective]
})
export class PlaylistDetailsComponent implements OnInit {
  @Input() imgLeftLink: string | undefined;
  showEditDetails = false;

  toggleEditPlaylistName() {
    this.showEditDetails = !this.showEditDetails;
  }

  hideEditPlaylistName() {
    //this.showEditDetails = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
