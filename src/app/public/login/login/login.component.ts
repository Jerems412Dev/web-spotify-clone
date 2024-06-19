import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../shared/services/Token.service';
import { DataService } from '../../../shared/services/Data.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,ReactiveFormsModule,CommonModule]
})
export class LoginComponent {
  showPassword: boolean = false;
  @ViewChild("isToggle") isToggle: ElementRef | undefined;
  loginForm: FormGroup;

  constructor(private route:Router,
              private formBuilder: FormBuilder, 
              private authService: AuthenticationService,
              private tokenService: TokenService,
              private data: DataService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe(data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserByToken(data.token);
        this.data.setData("exp",new Date);
        if(data.token) {
          this.route.navigate(['/home']);
        }
      });
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if(this.isToggle?.nativeElement) {
      (!this.showPassword) ? this.isToggle.nativeElement.type = "password" : this.isToggle.nativeElement.type = "text";
    }
    
  }

}

