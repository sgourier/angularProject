import { Component, OnInit } from '@angular/core'
import { VideoService } from './video.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {

  private videos: any[];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  searchVideo(value: string) {
    value = value.replace(' ', '+');
    this.videoService.searchQueryVideos(value)
        .then(res => {this.videos = res; console.log(this.videos);});
  }
}
