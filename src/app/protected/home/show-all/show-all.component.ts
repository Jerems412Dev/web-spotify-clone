import { Component, OnInit } from '@angular/core';
import { MusicItemComponent } from "../../../shared/components/music-item/music-item.component";
import { HomeCategoryComponent } from "../home-category/home-category.component";

@Component({
    selector: 'app-show-all',
    standalone: true,
    templateUrl: './show-all.component.html',
    styleUrls: ['./show-all.component.css'],
    imports: [MusicItemComponent, HomeCategoryComponent]
})
export class ShowAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
