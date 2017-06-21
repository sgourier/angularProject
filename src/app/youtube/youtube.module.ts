import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { YoutubeRoutingModule } from './youtube-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist/playlist.service'


@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpModule
  ],
  declarations: [
      PlaylistComponent
  ],
  providers: [PlaylistService]
})
export class YoutubeModule { }
