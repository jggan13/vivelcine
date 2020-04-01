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
  page: number = 0;
  totalPages: Number;

  //https://espamidiomas.azurewebsites.net/images/ urlImage 

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.loading = true;

    this.activatedRoute.params.subscribe((params) => {
      this.loading = true;
      //console.log(params, params.length);
      if(params.page) { 
        this.page = params.page;
        //console.log('con paraaquiii');
      }else{
        this.page = 1 
        //console.log('si param');
      }
      
      //console.log(this.page);
      this.movieService.getMovies(this.page).subscribe( (data) => {
        //console.log(data);

        if(data.data.length <= 0 ){ this.router.navigate(['/movies']);}
        this.movies = data.data;
        this.loading = false;
        //this.page = params.page;
        this.totalPages = Math.ceil((data.count / 16));
        //window.scroll(0,0);
      }, (error) => {
        this.router.navigate(['/movies']);
      });

    })

  }

  ngOnInit(): void {
  }

  nextPage = () => {
    
    this.page = Number(this.page) + 1;
    //console.log(this.page);
    this.router.navigate(['/movies', this.page]);
  }

  previousPage = () => {
    this.page = Number(this.page) - Number(1);
    this.router.navigate(['/movies', this.page]);
  }

}
