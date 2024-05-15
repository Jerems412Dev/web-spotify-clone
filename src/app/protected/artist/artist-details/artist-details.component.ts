import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../../shared/models/Artist';

@Component({
  standalone: true,
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  @Input("artist") artist : Artist | undefined;
  listen: number = Math.floor(Math.random() * (500000000 - 5000)) + 5000;
  constructor() { }

  ngOnInit() {
    
  }

}
