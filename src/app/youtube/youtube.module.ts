import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { ListComponent } from './list/list.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  declarations: [
      ListComponent,
      PlaylistComponent
  ]
})
export class YoutubeModule { }
