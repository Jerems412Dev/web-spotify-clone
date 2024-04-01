import { Component, OnInit } from '@angular/core';
import { SearchCategoryComponent } from '../search-category/search-category.component';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";

@Component({
    standalone: true,
    selector: 'app-search-show-all',
    templateUrl: './search-show-all.component.html',
    styleUrls: ['./search-show-all.component.css'],
    imports: [SearchCategoryComponent, MusicItemComponent]
})
export class SearchShowAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
