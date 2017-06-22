import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import {log} from "util";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistService {

  private accessToken = null;
  private channelId = '';
  data: any = {};

  constructor(private http: Http) {
    this.accessToken = localStorage.getItem('access_token');
  }

  getPlaylistsByChannelId(username) {
      this.getChannelId(username)
          .then(data => {
             this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?part=snippet%2CcontentDetails&channelId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
                      .map((res: Response) => res.json())
                      .subscribe(playlist => {
                          console.log(playlist);
                          this.data = playlist;
                      })
          });
  }

  getChannelId(username) {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'channels?part=id&forUsername=' + username + '&key=' + YOUTUBE_CONFIG.apiKey)
            .toPromise();
  }
}
