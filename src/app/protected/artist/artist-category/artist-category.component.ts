import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-artist-category',
  templateUrl: './artist-category.component.html',
  styleUrls: ['./artist-category.component.css'],
  imports: [CommonModule, RouterLink]
})
export class ArtistCategoryComponent implements OnInit {

  constructor(private router: Router) { }
  isRightLink(): boolean {
    return this.router.url !== '/artist/section';
  }


  ngOnInit() {
  }

}
