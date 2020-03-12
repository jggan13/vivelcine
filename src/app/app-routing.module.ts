import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: 'movies',    component: MoviesComponent  },
  { path: 'movies/:id',    component: MoviesComponent  },
  { path: 'movie/:id', component: MovieComponent   },
  { path: 'search/:termino', component: SearchComponent },
  { path: '',   pathMatch: 'full', redirectTo: '/movies/1' },
  { path: '**', pathMatch: 'full', redirectTo: '/movies/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
