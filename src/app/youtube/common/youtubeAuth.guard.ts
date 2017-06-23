import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { YoutubeAuthService } from '../auth/youtube-auth.service';


@Injectable()
export class YoutubeAuthGuard implements CanActivate {
    constructor(private router: Router,
                private youtubeAuth: YoutubeAuthService) {}

    /**
     * Check if Youtube credentials are not expired before routing
     * @returns {boolean}
     */
    canActivate() {
        if (this.youtubeAuth.isAuthenticated()) {
            return true;
        }

        // Redirect to Youtube login if not authenticated
        this.router.navigate(['/youtube/login']);
        return false;
    }
}
