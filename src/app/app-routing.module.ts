import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',  component: AuthComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'youtube', component: YoutubeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
