import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { YoutubeRoutingModule } from './youtube-routing.module';

import { PlaylistComponent } from './playlist/playlist.component';
import { CallbackComponent } from './callback/callback.component';
import { VideoComponent } from './video/video.component';
import { AuthComponent } from './auth/auth.component';
import { YoutubeComponent } from './youtube.component';

import { PlaylistService } from './playlist/playlist.service';
import { YoutubeAuthService } from './auth/youtube-auth.service';
import { PlaylistParserService } from './playlist/playlist-parser.service';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpModule
  ],
  declarations: [
      PlaylistComponent,
      AuthComponent,
      CallbackComponent,
      VideoComponent,
      YoutubeComponent
  ],
  providers: [
      PlaylistService,
      YoutubeAuthService,
      PlaylistParserService
  ]
})
export class YoutubeModule { }
