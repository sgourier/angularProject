import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YoutubeModule } from './youtube/youtube.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';

import { AppRoutingModule } from './app-routing.module';
import { YoutubeRoutingModule } from './youtube/youtube-routing.module';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './common/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    YoutubeModule,
    AppRoutingModule,
    YoutubeRoutingModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
