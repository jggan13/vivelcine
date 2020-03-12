import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any = {};
  loading: boolean;
  page: number;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {

    this.loading = true;


    this.activatedRoute.params.subscribe( (params) => {
      console.log(params.id);
      this.getMovie(params.id);
      this.page = params.page;
    })

   }

  ngOnInit(): void {
  }

  getMovie = (id: number) => {
    this.movieService.getMovie(id).subscribe((data) => {
      //console.log(data);
      this.movie = data;
      this.loading = false;
    });
  }

}
