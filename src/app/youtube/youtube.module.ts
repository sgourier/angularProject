import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  declarations: [
      PlaylistComponent
  ]
})
export class YoutubeModule { }
