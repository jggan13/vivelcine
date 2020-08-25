import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.css']
})
export class ChannelCardComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() page: Number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
