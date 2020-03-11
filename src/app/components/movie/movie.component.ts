import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( (params) => {
      console.log(params.id);
    })

   }

  ngOnInit(): void {
  }

}
