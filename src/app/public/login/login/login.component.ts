import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../shared/services/Token.service';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private route:Router,
              private formBuilder: FormBuilder, 
              private authService: AuthenticationService,
              private tokenService: TokenService) {
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
        if(data.token) {
          this.route.navigate(['/home']);
        }
      });
    }
  }

}

