import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './public/login/login/login.component';
import { RegisterComponent } from './public/register/register/register.component';

export const routes: Routes = [
    { 
        path: '',
        title: 'Login',
        component: LoginComponent
    },
    { 
        path: 'register',
        title: 'Register',
        component: RegisterComponent 
    }
];
