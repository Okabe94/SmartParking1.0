import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { PrincipalPage } from '../pages/principal/principal';
import { ClassPage } from '../pages/class/class';
import { FinesPage } from '../pages/fines/fines';
import { ReservePage } from '../pages/reserve/reserve';
import { PeakPlatePage } from '../pages/peak-plate/peak-plate';
import { InformationFinesPage } from '../pages/information-fines/information-fines';


import { MyApp } from './app.component';

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from "./app.firebase";

import { AngularFireAuthModule } from "angularfire2/auth"
import { FireStorageProvider } from '../providers/fire-storage/fire-storage';
import { AlertProvider } from '../providers/alert/alert';




@NgModule({
  declarations: [
  MyApp,
  PrincipalPage,
  ClassPage,
  FinesPage,
  ReservePage,
  PeakPlatePage,
  InformationFinesPage

  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),

  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  AngularFireAuthModule,
  AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  PrincipalPage,    
  ClassPage,
  FinesPage,
  ReservePage,
  PeakPlatePage,
  InformationFinesPage
  ],
  providers: [
  StatusBar,
  SplashScreen,  
  AngularFireDatabaseModule,

  {provide: ErrorHandler, useClass: IonicErrorHandler},
  FireStorageProvider,
  AlertProvider,

  ]
})
export class AppModule {}
