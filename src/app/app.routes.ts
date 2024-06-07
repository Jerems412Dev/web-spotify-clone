import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './public/login/login/login.component';
import { RegisterComponent } from './public/register/register/register.component';
import { HomeComponent } from './protected/home/home/home.component';
import { SearchComponent } from './protected/search/search/search.component';
import { ShowAllComponent } from './protected/home/show-all/show-all.component';
import { GenreComponent } from './protected/search/genre/genre.component';
import { PlaylistComponent } from './protected/playlist/playlist/playlist.component';
import { LikedComponent } from './protected/liked/liked/liked.component';
import { AlbumComponent } from './protected/album/album/album.component';
import { ArtistComponent } from './protected/artist/artist/artist.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { 
        path: '',
        title: 'Login',
        component: LoginComponent,
    },
    { 
        path: 'register',
        title: 'Register',
        component: RegisterComponent
    },
    { 
        path: 'home',
        title: 'Home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'search',
        title: 'Search',
        component: SearchComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'section',
        title: 'Web Player',
        component: ShowAllComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'genre',
        title: 'Web Player',
        component: GenreComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'playlist',
        title: 'Web Player',
        component: PlaylistComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'liked',
        title: 'Web Player',
        component: LikedComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'album',
        title: 'Web Player',
        component: AlbumComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'artist',
        title: 'Web Player',
        component: ArtistComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'error',
        title: 'Error',
        component: PageNotFoundComponent
    }
];
