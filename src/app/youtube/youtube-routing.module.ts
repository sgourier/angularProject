import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { VideoComponent } from './video/video.component'

import {AuthGuard} from '../common/auth.guard';

const routes: Routes = [
  { path: 'playlist',  component: PlaylistComponent, canActivate: [AuthGuard] },
  { path: 'video',  component: VideoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
