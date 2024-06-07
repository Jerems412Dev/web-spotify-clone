import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule,ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private route: Router,private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      profileName: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      birth: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const credentials = this.registerForm.value;
      this.authService.register(credentials).subscribe(data => {
        if(data) {
          this.route.navigateByUrl("/");
        }
      });
    }
  }

}
