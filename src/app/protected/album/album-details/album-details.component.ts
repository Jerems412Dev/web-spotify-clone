import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../shared/models/Album';
import { RouterLink } from '@angular/router';
import { EncryptionPipe } from '../../../shared/pipes/encryption.pipe';

@Component({
  selector: 'app-album-details',
  standalone: true,
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  imports: [RouterLink,EncryptionPipe]
})
export class AlbumDetailsComponent implements OnInit {
  @Input("album") album : Album | undefined;
  duration: number = Math.floor(Math.random() * (7 - 1)) + 1;
  constructor() { }

  ngOnInit() {
  }

}
