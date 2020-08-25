import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { VideoPlayerComponent } from './components/shared/video-player/video-player.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { OnlineChannelsComponent } from './components/online-channels/online-channels.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ChannelPlayerComponent } from './components/shared/channel-player/channel-player.component';


const routes: Routes = [
  { path: 'movies',    component: MoviesComponent  },
  { path: 'online-channels',    component: OnlineChannelsComponent },
  { path: 'register', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'movies/:page',    component: MoviesComponent  },
  { path: 'video-player/:id',    component: VideoPlayerComponent, canActivate: [AuthGuard]  },
  { path: 'channel-player/:id',    component: ChannelPlayerComponent, canActivate: [AuthGuard]  },
  { path: 'movie/:id/:page', component: MovieComponent   },
  { path: 'channel/:id', component: ChannelComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '',   pathMatch: 'full', redirectTo: 'movies' },
  { path: '**', pathMatch: 'full', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
