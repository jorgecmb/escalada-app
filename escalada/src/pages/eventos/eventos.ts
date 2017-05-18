import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CalendarService} from "../../services/CalendarService";

@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage {

  constructor(public navCtrl: NavController, private calendar: CalendarService) {

  }

}
