interface YoutubeConfig {
    clientID: string;
    apiUrl: string;
    callbackURL: string;
    apiKey: string;
    scope: string;
    responseType: string;
    authUrl: string;
}

export const YOUTUBE_CONFIG: YoutubeConfig = {
    clientID: '284533980749-va0b5d2u2rn3t2pa6mlfb2imcn6m996t.apps.googleusercontent.com',
    apiUrl: 'https://www.googleapis.com/youtube/v3/',
    callbackURL: 'http://localhost:4200/youtube/callback',
    apiKey: 'AIzaSyANlFJSmiI0DCecNJwanZo0ig7PZaulBR4',
    scope: 'https://www.googleapis.com/auth/youtube',
    responseType: 'token',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
};
