import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string;
  movies: any[] = [];
  loading: boolean;
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { 
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.termino);
      this.termino = params.termino;
      movieService.searchMovie(this.termino).subscribe(data => {
        console.log(data);
        this.movies = data['Data'];
        console.log(this.movies);
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {
  }

}
