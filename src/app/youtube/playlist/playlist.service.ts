import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';


@Injectable()
export class PlaylistService {

  private accessToken = null;
  data: any = {};

  constructor(private http: Http) {
    this.accessToken = localStorage.getItem('access_token');
    // this.getUserPlaylist();
  }

  getUserPlaylist() {
    return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + this.accessToken + '&part=snippet&mine=true')
                    .map((res: Response) => res.json())
                    .subscribe(data => {
                      console.log(data);
                      this.data = data
                    })
  }

  getPlaylistByChannel() {
      return this.http.get(YOUTUBE_CONFIG.apiUrl + 'search?part=snippet&q=' +  + '&type=playlist&key=' + YOUTUBE_CONFIG.apiKey)
                      .map((res: Response) => res.json())
                      .subscribe(data => {
                          console.log(data);
                          this.data = data
                      })
  }

  getChannelId() {
      return this.http.get(YOUTUBE_CONFIG.apiUrl + 'channels?part=id&forUsername=' + + '&key=' + YOUTUBE_CONFIG.apiKey)
          .map((res: Response) => res.json())
          .subscribe(data => {
              console.log(data);
              this.data = data
          })
  }

}
