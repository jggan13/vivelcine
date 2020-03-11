import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  loading: boolean;
  movies: any[] = [];

  //https://espamidiomas.azurewebsites.net/images/ urlImage 

  constructor(private movieService: MovieService) { 

    this.loading = true;

    this.movieService.getMovies().subscribe( (data) => {
      //console.log(data);
      this.movies = data;
      this.loading = false;
    });

  }

  ngOnInit(): void {
  }

}
