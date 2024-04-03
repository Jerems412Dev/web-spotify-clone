import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-details',
  standalone: true,
  templateUrl: './liked-details.component.html',
  styleUrls: ['./liked-details.component.css']
})
export class LikedDetailsComponent implements OnInit {
  @Input() imgLeftLink: string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
