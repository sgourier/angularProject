import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { YoutubeAuthService } from '../auth/youtube-auth.service';


@Injectable()
export class YoutubeAuthGuard implements CanActivate {
    constructor(private router: Router,
                private youtubeAuth: YoutubeAuthService) {}

    canActivate() {
        if (this.youtubeAuth.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/youtube/login']);
        return false;
    }
}
