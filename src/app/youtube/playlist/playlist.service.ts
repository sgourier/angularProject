import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistService {


  private channelId = '';
  data: any = {};

  constructor(private http: Http) {
  }

  getPlaylistsByChannelId(username) {
      this.getChannelId(username)
          .then(data => {
             this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?part=snippet%2CcontentDetails&channelId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
                      .map((res: Response) => res.json())
                      .subscribe(playlist => {
                          this.data = playlist;
                      })
          });
  }

  getChannelId(username) {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'channels?part=id&forUsername=' + username + '&key=' + YOUTUBE_CONFIG.apiKey)
            .toPromise();
  }

  getUserPlaylist() {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
            .toPromise();
  }

  getCurrentUserPlaylist() {
      return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
          .map((res: Response) => res.json())
          .subscribe(data => {
              this.data = data;
          })
  }

  getVideosByPlaylistId() {
   this.getUserPlaylist()
       .then(data => {
           this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlistItems?part=snippet&playlistId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
               .map((res: Response) => res.json())
               .subscribe(videos => {
                   this.data = videos;
               })
       })
  }

  createPlaylist( name , description , status ) {
      this.http.post(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet%2Cstatus' + '&key=' + YOUTUBE_CONFIG.apiKey, { 'snippet': {
          'title': name,
          'description': description
      },
          'status': {
              'privacyStatus': status
          }})
          .map((res: Response) => res.json())
          .subscribe(playlist => {
              this.data = playlist;
          })
  }
}
