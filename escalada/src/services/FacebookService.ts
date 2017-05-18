import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

  private accessToken = 'EAARJOZBpKJeYBAGS8e8OkbEBPwf9T8UvYwFc7McWGt7TZBw74khzX3shYR7r06JA3FD1zqUlDNl76uVAxXaCigTSmdPSPUct3s093ZCW0CGNPfr66NeGrgQTqozBLX13XF5HnOquR9sJDtaCIX3hvfnpHy32XiW8n7FFx0WCLk99QQbNSmk';

  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(private http: Http) { }

  getPosts(pageName: string): Observable<any[]> {
    let url = this.graphUrl + pageName + this.graphQuery;

    return this.http
      .get(url)
      .map(response => response.json().posts.data);
  }
}
