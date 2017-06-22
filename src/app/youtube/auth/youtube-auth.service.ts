import { Injectable } from '@angular/core';

import { YOUTUBE_CONFIG } from '../youtubeSettings';

@Injectable()
export class YoutubeAuthService {

  constructor() { }

  login() {
    let url = YOUTUBE_CONFIG.authUrl;
    url += '?client_id=' + YOUTUBE_CONFIG.clientID;
    url += '&redirect_uri=' + YOUTUBE_CONFIG.callbackURL;
    url += '&response_type=' + YOUTUBE_CONFIG.responseType;
    url += '&scope=' + YOUTUBE_CONFIG.scope;

    window.location.replace(url);
  }

}
