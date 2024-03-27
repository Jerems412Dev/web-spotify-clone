import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink]
})
export class SidebarComponent implements OnInit { 

  constructor(private router: Router) {}

  isActiveHome(): boolean {
    if(this.router.url === '/home') {
      return true
    }
    return false;
  }

  isActiveSearch(): boolean {
    if(this.router.url === '/search') {
      return true;
    }
    return false;
  }

  ngOnInit() {
    
  }

}
