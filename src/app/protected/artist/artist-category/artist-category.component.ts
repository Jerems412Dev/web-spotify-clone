import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Section } from '../../../shared/models/Section';
import { DataService } from '../../../shared/services/Data.service';

@Component({
  standalone: true,
  selector: 'app-artist-category',
  templateUrl: './artist-category.component.html',
  styleUrls: ['./artist-category.component.css'],
  imports: [CommonModule, RouterLink]
})
export class ArtistCategoryComponent implements OnInit {
  @Input("section") section: Section | undefined;

  constructor(private router: Router,
    private dataService: DataService) { }

  isRightLink(): boolean {
    if(this.router.url === '/section') {
      return true;
    }
    return false;
  }

  linkSection(section: any) {
    this.dataService.setSectionSelect(section);
  }


  ngOnInit() {
  }

}
