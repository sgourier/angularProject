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
import { PlaylistvideosService } from './playlist-videos/playlist-videos.service';
import { YoutubeAuthService } from './auth/youtube-auth.service';
import { PlaylistParserService } from './playlist/playlist-parser.service';
import {VideoService} from './video/video.service';
import { VideoParserService } from './video/video-parser.service';
import { YoutubeAuthGuard } from './common/youtubeAuth.guard';

import { FormsModule } from '@angular/forms';
import { PlaylistVideosComponent } from './playlist-videos/playlist-videos.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpModule,
      FormsModule
  ],
  declarations: [
      PlaylistComponent,
      AuthComponent,
      CallbackComponent,
      VideoComponent,
      YoutubeComponent,
      PlaylistVideosComponent
  ],
  providers: [
      PlaylistService,
      YoutubeAuthService,
      PlaylistParserService,
      VideoService,
      VideoParserService,
      YoutubeAuthGuard
  ]
})
export class YoutubeModule { }
