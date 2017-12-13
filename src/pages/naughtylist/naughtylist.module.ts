import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NaughtylistPage} from "./naughtylist";

@NgModule({
  declarations: [
    NaughtylistPage,
  ],
  imports: [
    IonicPageModule.forChild(NaughtylistPage),
  ],
})
export class NaughtylistPageModule {}
