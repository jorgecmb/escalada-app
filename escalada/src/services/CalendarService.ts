import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CalendarService {

  key = 'AIzaSyA3RSz2g0eO8pz0xYMqyBrv-4neL1HAHoo';
  constructor(private http: Http) {}

  //Mudar abaixo. Tem que user oAuth do Google para acessar o calendário
  getEvents(calendarId) {
    return this.http.get("https://www.googleapis.com/calendar/v3/calendars/"+calendarId+"&key="+this.key)
  }
}
