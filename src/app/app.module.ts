import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import {NaughtylistPage} from "../pages/naughtylist/naughtylist";
import {NicelistPage} from "../pages/nicelist/nicelist";
import {FIREBASE_CONFIG} from "./firebase.config";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NaughtylistPage,
    NicelistPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
      AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NaughtylistPage,
    NicelistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataProvider
  ]
})
export class AppModule {}
