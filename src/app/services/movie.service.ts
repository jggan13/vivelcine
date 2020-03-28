import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getQuery = (url: string) => {

    const uri: string =  `https://espamidiomas.azurewebsites.net/api/${url}`;
    return this.http.get(uri);

  }

  getMovies = (page: number) => {

    //movies/1
    return this.getQuery(`movies/${page}`).pipe(map((data) => {
      //console.log(page);
      return data['Data'];
    }));

  }

  getMovie = (id: number) => {
    //movies/detail/5
    return this.getQuery(`movies/detail/${id}`);
  }
  
}
