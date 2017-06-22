import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { YoutubeRoutingModule } from './youtube-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist/playlist.service';
import { AuthComponent } from './auth/auth.component'
import {YoutubeAuthService} from './auth/youtube-auth.service';
import { CallbackComponent } from './callback/callback.component';
import { VideoComponent } from './video/video.component';


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
      VideoComponent
  ],
  providers: [
      PlaylistService,
      YoutubeAuthService
  ]
})
export class YoutubeModule { }
