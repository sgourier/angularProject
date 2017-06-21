import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  declarations: [YoutubeComponent, ListComponent]
})
export class YoutubeModule { }
