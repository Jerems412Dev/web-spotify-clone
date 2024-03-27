import { Component, ElementRef, OnInit } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';
import { SetBackgroundDirective } from '../../../core/directives/SetBackgroundColor.directive';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    imports: [SqueletonComponent,SetBackgroundDirective]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
