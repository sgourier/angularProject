import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {

  data: any = {};
  constructor(private http: Http) { }

  searchQueryVideos(query) {
    return this.http.get(YOUTUBE_CONFIG.apiUrl + 'search?part=snippet&order=viewCount&q=' + query + '&type=video&videoDefinition=high&key=' + YOUTUBE_CONFIG.apiKey)
        .map((res: Response) => res.json())
        .subscribe(data => {
          this.data = data;
        })
  }

  getData(query){
      return this.http.get(YOUTUBE_CONFIG.apiUrl + 'search?part=snippet&order=viewCount&q=' + query + '&type=video&videoDefinition=high&key=' + YOUTUBE_CONFIG.apiKey)
          .map((res:Response) => res.json());
  }
}
