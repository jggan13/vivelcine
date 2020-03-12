import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.termino);
      this.termino = params.termino;
    });
  }

  ngOnInit(): void {
  }

}
