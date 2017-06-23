import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { YoutubeComponent } from './youtube.component';

import { VideoComponent } from './video/video.component'
import {AuthGuard} from '../common/auth.guard';
import {YoutubeAuthGuard} from './common/youtubeAuth.guard';

const routes: Routes = [
  { path: 'youtube/login',  component: AuthComponent, canActivate: [AuthGuard] },
  { path: 'youtube/callback',  component: CallbackComponent, canActivate: [AuthGuard] },
  { path: 'video',  component: VideoComponent, canActivate: [AuthGuard, YoutubeAuthGuard] },
  { path: 'playlist',  component: PlaylistComponent, canActivate: [AuthGuard, YoutubeAuthGuard] },
  { path: 'youtube', component: YoutubeComponent, canActivate: [AuthGuard, YoutubeAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
