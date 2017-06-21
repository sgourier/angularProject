import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YoutubeModule } from './youtube/youtube.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';

import { AppRoutingModule } from './app-routing.module'

import { AuthService } from './auth/auth.service'

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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
