import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
//import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TextocondicionadoPipe } from './pipes/textocondicionado.pipe';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { MovieCardComponent } from './components/shared/movie-card/movie-card.component';
import { CardLoadingComponent } from './components/shared/card-loading/card-loading.component';
import { VideoPlayerComponent } from './components/shared/video-player/video-player.component';
//import { VjsPlayerComponent } from './components/shared/app-vjs-player/app-vjs-player.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { OnlineChannelsComponent } from './components/online-channels/online-channels.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ChannelCardComponent } from './components/shared/channel-card/channel-card.component';
import { ChannelPlayerComponent } from './components/shared/channel-player/channel-player.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent,
    MoviesComponent,
    LoadingComponent,
    NoimagePipe,
    TextocondicionadoPipe,
    PaginationComponent,
    SearchComponent,
    LoadingSpinnerComponent,
    MovieCardComponent,
    CardLoadingComponent,
    VideoPlayerComponent,
    //VjsPlayerComponent,
    RegistroComponent,
    LoginComponent,
    OnlineChannelsComponent,
    ChannelComponent,
    ChannelCardComponent,
    ChannelPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    //NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
