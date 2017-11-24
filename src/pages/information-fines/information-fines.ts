import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-information-fines',
  templateUrl: 'information-fines.html',
})
export class InformationFinesPage implements OnInit{

	public optionFine:Array<any>;
	
	private formFine: FormGroup;

  public today = new Date();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private formBuilder: FormBuilder,) {
  }

  ngOnInit(){
  	this.optionFine = [{value:"Sobre la Linea",data:"Sobre la Linea"},
  					   {value:"Ocupando varias Celdas",data:"Ocupando varias Celdas"},
  					   {value:"Con Ventanas Abiertas",data:"Con Ventanas Abiertas"},
  					   {value:"Con Puertas Abiertas",data:"Con Puertas Abiertas"},
  					   {value:"En zona Prohibida",data:"En zona Prohibida"},
  					   {value:"No parqueo en reversa",data:"No parqueo en reversa"},
  					   {value:"Objetos dejados en el Vehiculo",data:"Objetos dejados en el Vehiculo"}]
               this.creareForm();
  }

  creareForm() {

    this.formFine = this.formBuilder.group({
      nameParking: ['', Validators.required],
      date: ['', Validators.required],
      licensePlate: ['', Validators.required],
      fineCheck: ['', Validators.required],      
    });

    
  }

  payFines(){
  	console.log(this.formFine.value)
  }

}
