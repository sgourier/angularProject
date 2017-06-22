import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { YoutubeRoutingModule } from './youtube-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist/playlist.service';
import { VideoComponent } from './video/video.component';


@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpModule
  ],
  declarations: [
      PlaylistComponent,
      VideoComponent
  ],
  providers: [PlaylistService]
})
export class YoutubeModule { }
