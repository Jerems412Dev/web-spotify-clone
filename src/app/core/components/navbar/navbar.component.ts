import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { AutoFocusDirective } from '../../directives/autoFocus.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule,ClickOutsideDirective,AutoFocusDirective]
})
export class NavbarComponent implements OnInit {
  showDiv = false;
  clickbutton = false;
  
  constructor(private router: Router) {}

  isHomeRoute(): boolean {
      return this.router.url === '/home';
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  hideDiv() {
    this.showDiv = false;
  }

  ngOnInit() {
    
  }

}
