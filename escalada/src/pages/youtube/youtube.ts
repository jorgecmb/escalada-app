import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {YoutubeService} from "../../services/YoutubeService";


@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})
export class YoutubePage {
  channel = 'UCxtEGl1vKzQb2NUS6UBrCBA';
  datas:any;
  nextPageToken:any;
  constructor(public navCtrl: NavController, private yt: YoutubeService) {
    yt.playlist(this.channel).subscribe(data => {
      this.datas = data.json().items;
      if(data.json().nextPageToken){
        this.nextPageToken = data.json().nextPageToken;
      }
    });
  }

  openPlaylist(id){
    //this.navCtrl.push(PlaylistPage, {id:id});
  }

  infiniteScroll(ev){
    if(this.nextPageToken){
      this.yt.playlist_page(this.channel,this.nextPageToken).subscribe(data=>{
        for(let i of data.json().items){
          this.datas.push(i);
        }
        ev.complete();
        if(!data.json().nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.json().nextPageToken;
        }
      })
    }else{
      ev.complete();
    }
  }

}
