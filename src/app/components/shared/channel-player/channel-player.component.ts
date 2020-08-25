import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChannelsService } from 'src/app/services/channels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-player',
  templateUrl: './channel-player.component.html',
  styleUrls: ['./channel-player.component.css']
})
export class ChannelPlayerComponent implements OnInit {

  movie: any = {} ;
  loading: boolean = true;
  iframeSource: any;
  mediaId: string;
  //video: string = 'https://www.googleapis.com/drive/v2/files/1PuQnc9GA4kfozyVHrmC1zD6c7ET81Ol7?alt=media&key=AIzaSyBGW-eFpHa2yL4zKmhp0P5ifB6_XaIFuA0';
  video: string;

  constructor(private dom: DomSanitizer, private channelsService: ChannelsService, private activatedRoute: ActivatedRoute) { 

    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.channelsService.getMovie(params.id).subscribe(data => {
        
        console.log(data);
        this.movie = data;
        this.mediaId = data['movieResource'];
        //console.log(this.mediaId);

       //this.video ='https://pornfree4allplayer.b-cdn.net/The-gentlemen/The.gentlemen.2020.1080p-dual-lat-www.vivelcine.com.mp4';
        this.iframeSource = this.dom.bypassSecurityTrustHtml(`
        <meta itemprop="uploadDate" content="Mon Apr 06 2020 10:55:26 GMT-0500 (Ecuador Time)" />
       
        <div style="position:relative; overflow:hidden; padding-bottom:56.25%">
        <iframe src="https://video-player.cmfconstructora.com.ec/digital/meg.php?id=${this.mediaId}" width="100%" height="100%" frameborder="0"
        scrolling="auto" title="La Casa De Papel 01" style="position:absolute;"
        allowfullscreen>
        </iframe>
        </div>
        `);

      });
    });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loading = false;
  }

}
