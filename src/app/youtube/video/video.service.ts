import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {

    data: any = {};
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    constructor(private http: Http) { }

    searchQueryVideos(query) {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'search?part=snippet&order=viewCount&q=' + query + '&type=video&videoDefinition=high&key=' + YOUTUBE_CONFIG.apiKey)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
}
