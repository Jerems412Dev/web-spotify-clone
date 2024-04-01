import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BrowseAllComponent } from "../browse-all/browse-all.component";
import { GenreComponent } from "../genre/genre.component";
import { SearchResultComponent } from "../search-result/search-result.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    imports: [BrowseAllComponent, GenreComponent, SearchResultComponent,CommonModule]
})
export class SearchComponent implements OnInit {
  //@Input() inputSearch: ElementRef | undefined;

  constructor() { }

  /*isKeyUp(): boolean {
    let regex = /\S/;
    let verif = false;
    if (regex.test(this.inputSearch?.nativeElement.value)) {
      alert(this.inputSearch?.nativeElement.value);
      verif = true;
    }
    return verif;
  }*/

  ngOnInit() {
    
  }

}
