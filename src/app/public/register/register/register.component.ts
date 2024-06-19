import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/Authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule,ReactiveFormsModule,CommonModule]
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  @ViewChild("isToggle") isToggle: ElementRef | undefined;
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

  togglePassword() {
    this.showPassword = !this.showPassword;
    if(this.isToggle?.nativeElement) {
      (!this.showPassword) ? this.isToggle.nativeElement.type = "password" : this.isToggle.nativeElement.type = "text";
    }
    
  }

}
