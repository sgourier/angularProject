import { Injectable } from '@angular/core';

import { Video } from './Video';

@Injectable()
export class VideoParserService {

  constructor() { }

  public parse(jsonVideos) {
    let videos: Video[];

    for (let cptPlaylist = 0; cptPlaylist < jsonVideos.length; cptPlaylist++) {
      let video = new Video();

      video.id = jsonVideos[cptPlaylist].id;
      video.title = jsonVideos[cptPlaylist].snippet.title;
      video.description = jsonVideos[cptPlaylist].snippet.description;
      video.thumbnail = jsonVideos[cptPlaylist].snippet.thumbnails[0].url;

      videos.push(video);
    }

    return videos;
  }

}
