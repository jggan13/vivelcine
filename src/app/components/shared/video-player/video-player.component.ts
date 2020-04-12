import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import 'video.js';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  movie: any = {} ;
  loading: boolean = true;
  iframeSource: any;
  mediaId: string;
  //video: string = 'https://www.googleapis.com/drive/v2/files/1PuQnc9GA4kfozyVHrmC1zD6c7ET81Ol7?alt=media&key=AIzaSyBGW-eFpHa2yL4zKmhp0P5ifB6_XaIFuA0';
  video: string;
  constructor(private dom: DomSanitizer, private movieService: MovieService, private activatedRoute: ActivatedRoute) { 

    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovie(params.id).subscribe(data => {
        
        //console.log(data);
        this.movie = data;
        this.mediaId = data['idVideo'];
        //console.log(this.mediaId);

       
        this.iframeSource = this.dom.bypassSecurityTrustHtml(`
        <meta itemprop="uploadDate" content="Mon Apr 06 2020 10:55:26 GMT-0500 (Ecuador Time)" />
       
        <div style="position:relative; overflow:hidden; padding-bottom:56.25%">
        <iframe src="https://pornfree4all.com/digital/api/meg.php?id=${this.mediaId}" width="100%" height="100%" frameborder="0"
        scrolling="auto" title="La Casa De Papel 01" style="position:absolute;"
        allowfullscreen>
        </iframe>
        </div>
        `);
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {
  }

}
