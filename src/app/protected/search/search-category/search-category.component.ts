import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Section } from '../../../shared/models/Section';
import { DataService } from '../../../shared/services/Data.service';

@Component({
  standalone: true,
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css'],
  imports: [RouterLink,CommonModule]
})
export class SearchCategoryComponent implements OnInit {
  @Input("section") section: Section | undefined;

  constructor(private router: Router,private dataService: DataService) { }
  isRightLink(): boolean {
    return this.router.url === '/genre';
  }

  linkSection(section: any) {
    this.dataService.setData("sc_section",section);
  }

  ngOnInit() {
  }

}
