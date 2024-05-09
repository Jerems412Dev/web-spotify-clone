import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { AutoFocusDirective } from '../../directives/autoFocus.directive';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { TokenService } from '../../../shared/services/Token.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule, ClickOutsideDirective, AutoFocusDirective, RouterLink]
})
export class NavbarComponent implements OnInit {
  showDiv = false;
  
  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService) {}

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
    ;
  }

  goBack() {
    history.go(-1);
  }

  logout() {
    this.authService.logout();
    this.tokenService.editIsAuthenticated(false);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    
  }

}
