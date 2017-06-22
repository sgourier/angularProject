import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule
  ],
  declarations: [VideoComponent]
})
export class VideoModule { }
