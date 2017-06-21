import { Component, OnInit } from '@angular/core';
import {PlaylistService} from './playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [PlaylistService]
})
export class PlaylistComponent implements OnInit {

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.getUserPlaylist();
  }

}
