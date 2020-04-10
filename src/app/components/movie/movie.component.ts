import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any = {};
  loading: boolean;
  page: number;
  video: any ;
  isDisabled: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private dom: DomSanitizer) {

    this.loading = true;


    this.activatedRoute.params.subscribe( (params) => {
      //console.log(params.id);
      this.getMovie(params.id);
      this.page = params.page;
      console.log(this.movie.idVideo);
      // if(this.movie.idVideo.length){
      //   this.isDisabled = false;
      // }else{
      //   this.isDisabled = true;
      // }
    })

    

   }

  ngOnInit(): void {
  }

  getMovie = (id: number) => {
    this.movieService.getMovie(id).subscribe((data) => {
      console.log(data);
      this.movie = data;
      this.loading = false;
    });
  }

}
