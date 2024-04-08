import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './public/login/login/login.component';
import { RegisterComponent } from './public/register/register/register.component';
import { HomeComponent } from './protected/home/home/home.component';
import { SearchComponent } from './protected/search/search/search.component';
import { ShowAllComponent } from './protected/home/show-all/show-all.component';
import { GenreComponent } from './protected/search/genre/genre.component';
import { SearchShowAllComponent } from './protected/search/search-show-all/search-show-all.component';
import { PlaylistComponent } from './protected/playlist/playlist/playlist.component';
import { LikedComponent } from './protected/liked/liked/liked.component';
import { AlbumComponent } from './protected/album/album/album.component';
import { ArtistComponent } from './protected/artist/artist/artist.component';
import { ArtistShowAllComponent } from './protected/artist/artist-show-all/artist-show-all.component';

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
    },
    { 
        path: 'genre',
        title: 'Spotify - Web Player',
        component: GenreComponent
    },
    { 
        path: 'genre/section',
        title: 'Spotify - Web Player',
        component: SearchShowAllComponent
    },
    { 
        path: 'artist/section',
        title: 'Spotify - Web Player',
        component: ArtistShowAllComponent
    },
    { 
        path: 'playlist',
        title: 'Spotify - Web Player',
        component: PlaylistComponent
    },
    { 
        path: 'liked',
        title: 'Spotify - Web Player',
        component: LikedComponent
    },
    { 
        path: 'album',
        title: 'Spotify - Web Player',
        component: AlbumComponent
    },
    { 
        path: 'artist',
        title: 'Spotify - Web Player',
        component: ArtistComponent
    },
    { 
        path: 'error',
        title: 'Error',
        component: PageNotFoundComponent
    }
];
