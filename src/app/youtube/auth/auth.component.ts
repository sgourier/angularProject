import { Component, OnInit } from '@angular/core';

import { YoutubeAuthService } from './youtube-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  constructor(private youtubeAuth: YoutubeAuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.youtubeAuth.login();
  }
}
