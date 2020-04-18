import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getQuery = (url: string) => {

    //https://api.cmfconstructora.com.ec/api/movies/2
    //https://espamidiomas.azurewebsites.net/api
    const uri: string =  `https://espamidiomas.azurewebsites.net/api/${url}`;
    return this.http.get(uri);

  }

  getMovies = (page: number) => {

    //movies/1
    return this.getQuery(`movies/${page}`).pipe(map((data) => {
      //console.log(page);
      return { data: data['Data'], count: data['Total']};
    }));

  }

  getMovie = (id: number) => {
    //movies/detail/5
    return this.getQuery(`movies/detail/${id}`);
  }

  getMovieUrl = (id: number) => {
    //movies/detail/5
    return this.getQuery(`movies/detailValidUrl/${id}`);
  }

  searchMovie = (termino: string) => {
    //https://espamidiomas.azurewebsites.net/api/movies/Search/jef
    return this.getQuery(`movies/Search/${termino}`);
  }
  
}
