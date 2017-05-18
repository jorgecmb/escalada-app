import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacebookService} from "../../services/FacebookService";

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html'
})
export class FacebookPage {
  public posts: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public facebookService: FacebookService) {

    this.posts = this.facebookService
      .getPosts('movescalada')
      .map(data => data.map(this.mapPosts));
  }

  mapPosts = (post) => {
    return {
      from: post.from,
      time: post.created_time * 1000, // convert to milliseconds
      message: post.message,
      photos: this.getPhotos(post)
    };
  }

  getPhotos = (post) => {
    if (!post.attachments)
      return [];

    let attachments = post.attachments.data[0].subattachments ||
      post.attachments;

    return attachments.data
      .filter(x => x.type == "photo")
      .map(x => x.media.image);
  }

}
