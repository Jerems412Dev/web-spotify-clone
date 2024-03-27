import { Component, OnInit } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [SqueletonComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
