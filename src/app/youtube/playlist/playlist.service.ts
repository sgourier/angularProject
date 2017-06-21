import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {APISettings} from '../youtube.component';
import 'rxjs/add/operator/map';


@Injectable()
export class PlaylistService {

  private accessToken = null;
  data: any = {};

  constructor(private http: Http) {
    this.accessToken = localStorage.getItem('access_token');
    this.getUserPlaylist();
  }

  getUserPlaylist() {
    return this.http.get(APISettings.YOUTUBE_API_URL + 'playlists?access_token=' + this.accessToken + '&part=snippet&mine=true')
        .map((res: Response) => res.json())
        .subscribe(data => {
          console.log(data);
          this.data = data
        })
}

}
