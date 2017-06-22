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
        this.playlistService.createPlaylist("playlist 1","description","private");
        var playlists = this.playlistService.getUserPlaylist();
        console.log(playlists);
    }

    onClick(name,description,status) {
        if( name != "" ){
            if( description != "" ){
                if( status != "" ){
                    alert("OK");
//                    this.playlistService.createPlaylist(name,description,status)
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
