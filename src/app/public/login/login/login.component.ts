import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private route:Router,private formBuilder: FormBuilder, private authService: AuthenticationService) {
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
        const user: any = jwtDecode(data.token)
        localStorage.setItem('token',data.token);
        localStorage.setItem('userAuth',user);
        if(data.token) {
          this.route.navigateByUrl("/home");
        }
      });
    }
  }

}

