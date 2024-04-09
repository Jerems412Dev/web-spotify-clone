import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { AutoFocusDirective } from '../../directives/autoFocus.directive';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule, ClickOutsideDirective, AutoFocusDirective, RouterLink]
})
export class NavbarComponent implements OnInit {
  showDiv = false;
  
  constructor(private router: Router) {}

  isHomeRoute(): boolean {
      return this.router.url === '/search';
  }

  isHomeRouteHome(): boolean {
    return this.router.url === '/home';
}

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  hideDiv() {
    //alert("allo");
  }

  goBack() {
    history.go(-1);
  }

  ngOnInit() {
    
  }

}
