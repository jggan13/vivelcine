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

  getMovies = () => {

    //movies/1
    return this.getQuery('movies/1').pipe(map((data) => {
      return data['Data'];
    }));

  }
  
}
