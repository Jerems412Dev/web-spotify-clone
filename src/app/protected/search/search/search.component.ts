import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BrowseAllComponent } from "../browse-all/browse-all.component";
import { GenreComponent } from "../genre/genre.component";
import { SearchResultComponent } from "../search-result/search-result.component";
import { CommonModule } from '@angular/common';
import { DataService } from '../../../shared/services/Data.service';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    imports: [BrowseAllComponent, GenreComponent, SearchResultComponent,CommonModule]
})
export class SearchComponent implements OnInit {
  isSearch: boolean | undefined;
  searchValue: any;

  constructor(private data: DataService) {
    this.data.getSearchSelect().subscribe(data => {
      if(data) {
        this.isSearch = true;
        this.searchValue = data;
      }else {
        this.isSearch = false;
      }
    });
  }

  ngOnInit() {
    this.isSearch = false;
  }

}
