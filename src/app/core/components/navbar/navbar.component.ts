import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { AutoFocusDirective } from '../../directives/autoFocus.directive';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { TokenService } from '../../../shared/services/Token.service';
import { DataService } from '../../../shared/services/Data.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SetBackgroundDirective } from '../../directives/SetBackgroundColor.directive';
@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [CommonModule, ClickOutsideDirective, AutoFocusDirective, RouterLink,SetBackgroundDirective]
})
export class NavbarComponent implements OnInit {
  showDiv = false;
  user: any;
  inputValue: any = null;
  private inputSubject = new Subject<string>();
  
  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService,
              private data: DataService) 
  {
    this.inputSubject.pipe(
      debounceTime(900)
    ).subscribe(value => {
      this.checkIfWriting(value);
    });
  }

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

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    this.inputSubject.next(inputValue);
  }

  checkIfWriting(value: string): void {
    if(/\S/.test(value) && value.length > 1) {
      this.data.setSearchSelect(value);
    }else {
      this.data.setSearchSelect('');
    } 
  }

  ngOnInit() {
    this.user = this.data.getData("userConnect");
  }

}
