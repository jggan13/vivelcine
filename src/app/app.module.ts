import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TextocondicionadoPipe } from './pipes/textocondicionado.pipe';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent,
    MoviesComponent,
    LoadingComponent,
    NoimagePipe,
    TextocondicionadoPipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
