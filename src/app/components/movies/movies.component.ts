import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  loading: boolean;
  movies: any[] = [];
  page: Number;
  totalPages: Number;

  //https://espamidiomas.azurewebsites.net/images/ urlImage 

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.loading = true;

    this.activatedRoute.params.subscribe((params) => {
      this.loading = true;

      this.movieService.getMovies(params.page).subscribe( (data) => {
        //console.log(data);
        this.movies = data.data;
        this.loading = false;
        this.page = params.page;
        this.totalPages = Math.ceil((data.count / 16));
        //window.scroll(0,0);
      });

    })

  }

  ngOnInit(): void {
  }

  nextPage = () => {
    this.page = Number(this.page) + Number(1);
    this.router.navigate(['/movies', this.page]);
  }

  previousPage = () => {
    this.page = Number(this.page) - Number(1);
    this.router.navigate(['/movies', this.page]);
  }

}
