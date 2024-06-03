import { Component, Input, OnInit } from '@angular/core';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { ArtistItemComponent } from '../../../shared/components/artist-item/artist-item.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Section } from '../../../shared/models/Section';
import { DataService } from '../../../shared/services/Data.service';

@Component({
    selector: 'app-home-category',
    standalone: true,
    templateUrl: './home-category.component.html',
    styleUrls: ['./home-category.component.css'],
    imports: [CommonModule,MusicItemComponent, ArtistItemComponent, RouterLink]
})
export class HomeCategoryComponent implements OnInit {
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
