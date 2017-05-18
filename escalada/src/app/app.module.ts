import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FacebookPage } from '../pages/facebook/facebook';
import { YoutubePage } from '../pages/youtube/youtube';
import { EventosPage } from '../pages/eventos/eventos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FacebookService} from "../services/FacebookService";
import {YoutubeService} from "../services/YoutubeService";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    FacebookPage,
    YoutubePage,
    EventosPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FacebookPage,
    YoutubePage,
    EventosPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FacebookService,
    YoutubeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
