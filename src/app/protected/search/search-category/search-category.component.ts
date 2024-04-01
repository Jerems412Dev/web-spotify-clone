import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css'],
  imports: [RouterLink,CommonModule]
})
export class SearchCategoryComponent implements OnInit {

  constructor(private router: Router) { }
  isRightLink(): boolean {
    return this.router.url === '/genre';
  }

  ngOnInit() {
  }

}
