import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { YOUTUBE_CONFIG } from '../youtubeSettings';

@Injectable()
export class YoutubeAuthService {

  constructor(private router: Router) { }

  login() {
    let url = YOUTUBE_CONFIG.authUrl;
    url += '?client_id=' + YOUTUBE_CONFIG.clientID;
    url += '&redirect_uri=' + YOUTUBE_CONFIG.callbackURL;
    url += '&response_type=' + YOUTUBE_CONFIG.responseType;
    url += '&scope=' + YOUTUBE_CONFIG.scope;

    window.location.replace(url);
  }

  public handleRequest() {
    const access_token = this.getParameterByName('access_token', window.location.href);
    const expires_in = this.getParameterByName('expires_in', window.location.href);
    if (access_token !== '') {
      localStorage.setItem('youtube_access_token', access_token);
      localStorage.setItem('youtube_expires_in', expires_in);
      this.router.navigate(['/youtube']);
    } else {
      alert('L\'accès à échoué');
      this.router.navigate(['/youtube/login']);
    }
  }

  private getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'),
     results = regex.exec(url);
    if (!results) {
      return '';
    }

    if (!results[2]) {
      return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('youtube_expires_in'));
    return new Date().getTime() < expiresAt;
  }

}
