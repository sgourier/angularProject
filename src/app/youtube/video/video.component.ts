import { Component, OnInit } from '@angular/core'
import { VideoService } from './video.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  searchVideo(value: string) {
    this.videoService.searchQueryVideos(value);
    this.videoService.getData(value);
  }
}
