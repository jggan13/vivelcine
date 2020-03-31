import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pages: number[] = [1,2,3,4,5];
  @Input() page: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
