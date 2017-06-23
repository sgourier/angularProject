import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {YOUTUBE_CONFIG} from '../youtubeSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistvideosService {
    
    data: any = {};
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {
    }

    getUserPlaylist() {
        return this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlists?access_token=' + localStorage.getItem('youtube_access_token') + '&part=snippet&mine=true')
            .toPromise();
    }

    getVideosByPlaylistId( playlistId ) {
        alert("a");
        this.getUserPlaylist()
            .then(data => {
                this.http.get(YOUTUBE_CONFIG.apiUrl + 'playlistItems?part=snippet&playlistId=' + playlistId + '&key=' + YOUTUBE_CONFIG.apiKey)
                    .toPromise()
                    .then(response => {response.json()})
                    .catch(this.handleError);
            })
    }
}
