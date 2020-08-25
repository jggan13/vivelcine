import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private http: HttpClient) { }

  private getQuery = (url: string) => {

    //https://vivelcine-api.herokuapp.com/api/movies
    const uri: string =  `https://vivelcine-api.herokuapp.com/api/${url}`;
    return this.http.get(uri);
  }

  getMovies = (page: number) => {

    //movies/1
    return this.getQuery(`movies`);
  }

  getMovie = (id: number) => {
    //movies/5
    return this.getQuery(`movies/${id}`);
  }

}
