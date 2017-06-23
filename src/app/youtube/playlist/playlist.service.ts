import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistService {


    private channelId = '';
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    data: any = {};

  constructor(private http: Http) {
  }

  getPlaylistsByChannelId(username) {
      this.getChannelId(username)
          .then(data => {
             this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?part=snippet%2CcontentDetails&channelId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
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

  getCurrentUserPlaylist(){
    return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }


  getVideosByPlaylistId() {
   this.getUserPlaylist()
       .then(data => {
           this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlistItems?part=snippet&playlistId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
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

  addingVideoToPlaylist(playlist_id, video_id) {
      this.http.post(YOUTUBE_CONFIG.apiUrl + 'playlistItems?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&key=' + YOUTUBE_CONFIG.apiKey,
          {
              'snippet': {
                  'playlistId': playlist_id,
                  'resourceId': {
                      'kind': 'youtube#video',
                      'videoId': video_id
                  }
              }
          }
      )
      .map((res: Response) => res.json())
      .subscribe(playlist => {
          this.data = playlist;
      })
  }

  deletingPlaylistById(playlistId) {
      this.http.delete(YOUTUBE_CONFIG.apiUrl + 'playlists?id=' + playlistId + '&access_token=' + localStorage.getItem('youtube_access_token') + '&key=' + YOUTUBE_CONFIG.apiKey)
          .map((res: Response) => res.json())
          .subscribe(videos => {
              this.data = videos;
          })
  }
}
