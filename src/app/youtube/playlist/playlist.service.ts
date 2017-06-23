import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistService {


    private channelId = '';
    data: any = {};

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

  constructor(private http: Http) {
  }

  /** Get PlaylistsByChannelID, passing the channel Username **/
  getPlaylistsByChannelId(username) {
      this.getChannelId(username)
          .then(data => {
             this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?part=snippet%2CcontentDetails&channelId=' + data.json()['items'][0]['id'] + '&key=' + YOUTUBE_CONFIG.apiKey)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
          });
  }

    /** Get ByChannelID, passing the channel Username **/
    getChannelId(username) {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'channels?part=id&forUsername=' + username + '&key=' + YOUTUBE_CONFIG.apiKey)
            .toPromise();
  }

  /** Get the current User Playlist **/
  getUserPlaylist() {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
            .toPromise();
  }

    /** Get the current User Playlist **/
    getCurrentUserPlaylist(){
    return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  /** Get the videos of a specific playlist **/
  getVideosByPlaylistId( playlistId ) {
        this.getUserPlaylist()
       .then(data => {
           this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlistItems?part=snippet&playlistId=' + playlistId + '&key=' + YOUTUBE_CONFIG.apiKey)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
       })
  }

  /** Create Playlist for the authenticated User **/
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

  /** Add a video to playlist, passing the playlist_id, video_id **/
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

  /** deleting a specifif playlist **/
  deletingPlaylistById(playlistId) {
      this.http.delete(YOUTUBE_CONFIG.apiUrl + 'playlists?id=' + playlistId + '&access_token=' + localStorage.getItem('youtube_access_token') + '&key=' + YOUTUBE_CONFIG.apiKey)
          .map((res: Response) => res.json())
          .subscribe(videos => {
              this.data = videos;
          })
  }
}
