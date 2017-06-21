import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  declarations: [
      ListComponent
  ]
})
export class YoutubeModule { }
