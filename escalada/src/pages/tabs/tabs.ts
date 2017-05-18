import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {FacebookPage} from "../facebook/facebook";
import {YoutubePage} from "../youtube/youtube";
import {EventosPage} from "../eventos/eventos";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FacebookPage;
  tab3Root = YoutubePage;
  tab4Root = EventosPage;

  constructor() {

  }
}
