import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  movie: any = {};
  loading: boolean;
  page: number;
  video: any ;
  isDisabled: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
