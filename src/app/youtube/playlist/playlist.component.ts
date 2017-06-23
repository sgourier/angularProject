import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { PlaylistvideosService } from '../playlist-videos/playlist-videos.service';


@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css'],
    providers: [PlaylistvideosService]
})
export class PlaylistComponent implements OnInit {
    private playlists: any[];
    private videosPlaylist: any[];

    constructor(private playlistService: PlaylistService, private playlistVideoService: PlaylistvideosService) { }

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

    onClickDeletePlaylist(idPlaylist , name){
        alert("Vous allez supprimer la playlist : "+ name);
        this.playlistService.deletingPlaylistById(idPlaylist);
    }

    onClickDisplayVideos(idPlaylist){
        this.playlistVideoService.getVideosByPlaylistId(idPlaylist);
    }
}
