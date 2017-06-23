import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {}

    /**
     * Check if Auth0 credentials are not expired before routing
     * @returns {boolean}
     */
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        // Redirect to /login if not authenticated
        this.router.navigate(['/login']);
        return false;
    }
}
