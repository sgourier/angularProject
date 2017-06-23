import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0Settings';

@Injectable()
export class AuthService {

    // auth object configuration from AUTH_CONFIG const
    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: AUTH_CONFIG.responseType,
        audience: AUTH_CONFIG.audience,
        redirectUri: AUTH_CONFIG.callbackURL,
        scope: AUTH_CONFIG.scope
    });

    constructor(public router: Router) {}

    /**
     * Auth login request to auth0
     */
    public login(): void {
        this.auth0.authorize();
    }

    /**
     * Handle authentucition informations from Auth0 login request callback
     */
    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/youtube/login']);
            } else if (err) {
                this.router.navigate(['/login']);
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    /**
     * set Auth0 credentials to localStorage
     * @param authResult
     */
    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    /**
     * delete Auth0 and Youtube credentials from localStorage
     */
    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('youtube_access_token');
        localStorage.removeItem('youtube_expires_in');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/login']);
    }

    /**
     * Check if Auth0 credentials are not expired
     * @returns {boolean}
     */
    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}
