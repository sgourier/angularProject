import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'a8v7995kQaeMUHeJSnlZjZtMSPWTqq2W',
        domain: 'sgourier.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'https://sgourier.eu.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid'
    });

    constructor(public router: Router) {}

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/home']);
            } else if (err) {
                this.router.navigate(['/home']);
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }
}
