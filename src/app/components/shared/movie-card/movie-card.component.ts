import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() page: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
