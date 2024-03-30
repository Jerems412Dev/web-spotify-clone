import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './public/login/login/login.component';
import { RegisterComponent } from './public/register/register/register.component';
import { HomeComponent } from './protected/home/home/home.component';
import { SearchComponent } from './protected/search/search/search.component';
import { ShowAllComponent } from './protected/home/show-all/show-all.component';

export const routes: Routes = [
    { 
        path: '',
        title: 'Login - Spotify',
        component: LoginComponent
    },
    { 
        path: 'register',
        title: 'Register - Spotify',
        component: RegisterComponent 
    },
    { 
        path: 'home',
        title: 'Home - Spotify',
        component: HomeComponent
    },
    { 
        path: 'search',
        title: 'Search - Spotify',
        component: SearchComponent
    },
    { 
        path: 'section',
        title: 'Spotify - Web Player',
        component: ShowAllComponent
    }
];
