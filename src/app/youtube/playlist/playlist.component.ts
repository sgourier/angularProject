import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';


@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {


    constructor(private playlistService: PlaylistService) { }

    ngOnInit() {
    }

    onEnter(value: string) {this.playlistService.getPlaylistsByChannelId(value)}
}
