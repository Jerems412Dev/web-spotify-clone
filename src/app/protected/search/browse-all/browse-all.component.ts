import { Component, OnInit } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';
import { SetBackgroundDirective } from '../../../core/directives/SetBackgroundColor.directive';

@Component({
  selector: 'app-browse-all',
  standalone: true,
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.css'],
  imports: [SqueletonComponent,SetBackgroundDirective]
})
export class BrowseAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
