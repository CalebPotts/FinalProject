import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NicelistPage} from "../nicelist/nicelist";
import {NaughtylistPage} from "../naughtylist/naughtylist";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    gotoNiceList() {
        this.navCtrl.push(NicelistPage);
    }

    gotoNaughtyList() {
        this.navCtrl.push(NaughtylistPage);
    }

}
