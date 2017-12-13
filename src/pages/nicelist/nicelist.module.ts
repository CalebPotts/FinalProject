import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NicelistPage } from './nicelist';

@NgModule({
  declarations: [
    NicelistPage,
  ],
  imports: [
    IonicPageModule.forChild(NicelistPage),
  ],
})
export class NicelistPageModule {}
