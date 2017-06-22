import { Injectable } from '@angular/core';

import { Playlist } from './Playlist';

@Injectable()
export class PlaylistParserService {

  constructor() { }

  public parse(jsonPlaylists) {
    let playlists: Playlist[];

    for (let cptPlaylist = 0; cptPlaylist < jsonPlaylists.length; cptPlaylist++) {
      let playlist = new Playlist();

      playlist.id = jsonPlaylists[cptPlaylist].id;
      playlist.title = jsonPlaylists[cptPlaylist].snippet.title;
      playlist.description = jsonPlaylists[cptPlaylist].snippet.description;
      playlist.thumbnail = jsonPlaylists[cptPlaylist].snippet.thumbnails[0].url;

      playlists.push(playlist);
    }

    return playlists;
  }

}
