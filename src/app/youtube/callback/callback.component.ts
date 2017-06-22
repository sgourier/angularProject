import { Component, OnInit } from '@angular/core';
import { YoutubeAuthService } from '../auth/youtube-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private youtubeAuth: YoutubeAuthService) { }

  ngOnInit() {
    this.youtubeAuth.handleRequest();
  }

}
