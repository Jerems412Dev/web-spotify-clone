import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { AutoFocusDirective } from '../../directives/autoFocus.directive';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { TokenService } from '../../../shared/services/Token.service';
import { DataService } from '../../../shared/services/Data.service';
import { User } from '../../../shared/models/User';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule, ClickOutsideDirective, AutoFocusDirective, RouterLink]
})
export class NavbarComponent implements OnInit {
  showDiv = false;
  user: any;
  
  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService,
              private data: DataService) {}

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
    this.user = this.data.getData("userConnect");
  }

}
