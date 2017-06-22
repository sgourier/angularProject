interface AuthConfig {
    clientID: string;
    domain: string;
    responseType: string;
    audience: string;
    callbackURL: string;
    scope: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'a8v7995kQaeMUHeJSnlZjZtMSPWTqq2W',
    domain: 'sgourier.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://sgourier.eu.auth0.com/userinfo',
    callbackURL: 'http://localhost:4200/callback',
    scope: 'openid'
};
