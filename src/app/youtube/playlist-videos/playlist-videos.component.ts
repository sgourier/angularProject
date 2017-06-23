import { Component, OnInit } from '@angular/core';
import { PlaylistvideosService } from '../playlist-videos/playlist-videos.service';


@Component({
  selector: 'app-playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.css'],
  providers: [PlaylistvideosService]
})
export class PlaylistVideosComponent implements OnInit {

  private videosPlaylist: any[];

  constructor( private playlistVideoService: PlaylistvideosService) { }

  ngOnInit() {
  }


  onClickDisplayVideos(idPlaylist){
    //this.playlistVideoService.getVideosByPlaylistId(idPlaylist)
        //.then(res => this.videosPlaylist = res);
  }
}
