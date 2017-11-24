import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InformationFinesPage} from '../information-fines/information-fines'

/**
 * Generated class for the FinesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-fines',
 	templateUrl: 'fines.html',
 })
 export class FinesPage implements OnInit{


 	public finesList:Array<any>;
 	public finesListAux:Array<any>;
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}
 	ngOnInit(){
 		this.finesList = [{date_start:"17/11/2017",value:"$ 45.000",date_end:"22/11/2017"},
 		{date_start:"18/11/2017",value:"$ 50.000",date_end:"23/11/2017"},
 		{date_start:"19/11/2017",value:"$ 55.000",date_end:"24/11/2017"}]

 		this.finesListAux = this.finesList;	
 	}

 	onEvent(ev){
		this.finesList = this.finesListAux;
		var variable = ev.target.value;
		
		this.finesList = this.finesList.filter((item) => {
			return (item.date_start.toLowerCase().indexOf(variable.toLowerCase()) > -1);
		})
		
	}

 	
 	goToInformationFines(){
       this.navCtrl.push(InformationFinesPage)
 	}

 }
