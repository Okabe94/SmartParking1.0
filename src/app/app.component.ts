import { Component,ViewChild } from '@angular/core';
import { Nav,Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { PrincipalPage } from '../pages/principal/principal';
import { ClassPage } from '../pages/class/class';
import { FinesPage } from '../pages/fines/fines';
import { ReservePage } from '../pages/reserve/reserve';
import { PeakPlatePage } from '../pages/peak-plate/peak-plate';


import { AngularFireAuth } from "angularfire2/auth";

import { FireStorageProvider } from '../providers/fire-storage/fire-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  
  public rootPage:any = PrincipalPage;
  public imgLogo: any;

  public pages:Array<any>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private afAuth : AngularFireAuth,
    public fsp:FireStorageProvider,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.fsp.getUrlStorage("Logo.JPG",this.getUrlStorageImage.bind(this));
    this.pages = [
        { title: 'Principal', component: PrincipalPage,icon:'home' },
        { title: 'Clases', component: ClassPage,icon:'bookmarks' },
        { title: 'Multas', component: FinesPage,icon:'logo-buffer'  },
        { title: 'Pico y Placa', component: PeakPlatePage,icon:'car'  },
        { title: 'Reserva', component: ReservePage,icon:'md-calendar'  },
        
        ];
  }
  getUrlStorageImage(image){
    this.imgLogo = image;
  } 

   openPage(page) {
        this.nav.setRoot(page.component);
    }

  
}

