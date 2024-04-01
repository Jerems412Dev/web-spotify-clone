import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {
  @Input() imgLeftLink: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
