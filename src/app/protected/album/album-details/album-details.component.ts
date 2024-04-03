import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-details',
  standalone: true,
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() imgLeftLink: string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
