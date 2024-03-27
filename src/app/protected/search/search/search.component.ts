import { Component, OnInit } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    imports: [SqueletonComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
