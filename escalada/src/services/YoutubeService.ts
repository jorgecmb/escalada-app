import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeService {

  key = 'AIzaSyA3RSz2g0eO8pz0xYMqyBrv-4neL1HAHoo';
  constructor(private http: Http) {}

  playlist(channel){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+channel+"&key="+this.key)
  }

  playlist_page(channel, pageToken){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+channel+"&pageToken="+pageToken+"&key="+this.key)
  }

  playlistList(playlistId){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistId+"&key="+this.key)
  }

  playlistList_page(playlistId, pageToken){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken="+pageToken+"&playlistId="+playlistId+"&key="+this.key)
  }
}
