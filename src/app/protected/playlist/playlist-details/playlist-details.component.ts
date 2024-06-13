import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../../core/directives/clickOutside.directive';
import { UserPlaylist } from '../../../shared/models/UserPlaylist';
import { DataService } from '../../../shared/services/Data.service';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css'],
  imports: [CommonModule,ClickOutsideDirective]
})
export class PlaylistDetailsComponent implements OnInit {
  showEditDetails = false;
  @Input("playlist") playlist : UserPlaylist | undefined;
  user: any;

  toggleEditPlaylistName() {
    this.showEditDetails = !this.showEditDetails;
  }

  constructor(private data: DataService) { }

  updatePlaylist() {
    
  }

  ngOnInit() {
    this.user = this.data.getOneData("userConnect");
  }

}
