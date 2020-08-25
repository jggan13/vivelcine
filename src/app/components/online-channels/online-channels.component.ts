import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-online-channels',
  templateUrl: './online-channels.component.html',
  styleUrls: ['./online-channels.component.css']
})
export class OnlineChannelsComponent implements OnInit {

  loading: boolean;
  channels: any[] = [];
  page: number = 0;
  totalPages: Number;

  constructor(private channelsService: ChannelsService) { 
    channelsService.getMovies(0).subscribe((channels: any) => {
      this.channels = channels;
      console.log(this.channels);
    });
  }

  ngOnInit(): void {
  }

}
