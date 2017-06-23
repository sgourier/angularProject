import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';


@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    private playlists: any[];

    constructor(private playlistService: PlaylistService) { }

    ngOnInit() {
        this.playlistService.getCurrentUserPlaylist()
            .then(res => this.playlists = res);
    }

    onClick(name,description,status) {
        if( name != "" ){
            if( description != "" ){
                if( status != "" ){
                    this.playlistService.createPlaylist(name,description,status)
                }
                else{
                    alert("Status de la playlist manquant");
                }
            }
            else{
                alert("Description de la playlist manquant");
            }
        }
        else{
            alert("Nom de la playlist manquant");
        }

    }
}
