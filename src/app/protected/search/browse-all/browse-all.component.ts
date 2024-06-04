import { Component, OnInit } from '@angular/core';
import { SqueletonComponent } from '../../../core/components/squeleton/squeleton.component';
import { SetBackgroundDirective } from '../../../core/directives/SetBackgroundColor.directive';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../shared/services/Category.service';
import { DataService } from '../../../shared/services/Data.service';
import { Category } from '../../../shared/models/Category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-all',
  standalone: true,
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.css'],
  imports: [SqueletonComponent,SetBackgroundDirective,RouterLink,CommonModule]
})
export class BrowseAllComponent implements OnInit {
  categories: Category[] | undefined;

  constructor(private data: DataService) { }

  findAllCategories() {
    this.categories = this.data.getData("home_categories");
  }

  ngOnInit() {
    this.findAllCategories();
  }

}
