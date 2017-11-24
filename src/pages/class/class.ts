import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage implements OnInit{
  
  public classList:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
  	this.classList = [{date:"L,W,V",code:"022",matter:"Fisica II",block:"203-07"},
  					  {date:"M,J,S",code:"022",matter:"Fisica III",block:"303-07"}	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
  }

}
