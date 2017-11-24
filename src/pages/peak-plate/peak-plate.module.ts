import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeakPlatePage } from './peak-plate';

@NgModule({
  declarations: [
    PeakPlatePage,
  ],
  imports: [
    IonicPageModule.forChild(PeakPlatePage),
  ],
})
export class PeakPlatePageModule {}
