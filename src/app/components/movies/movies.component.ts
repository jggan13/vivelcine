import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  loading: boolean;
  movies: any[] = [];
  page: Number;

  //https://espamidiomas.azurewebsites.net/images/ urlImage 

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { 

    this.loading = true;

    this.activatedRoute.params.subscribe((params) => {
      this.loading = true;

      this.movieService.getMovies(params.page).subscribe( (data) => {
        //console.log(data);
        this.movies = data;
        this.loading = false;
        this.page = params.page;
        //window.scroll(0,0);
      });

    })

    

  }

  ngOnInit(): void {
  }

}
