import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cards',
    templateUrl: 'nicelist.html',
})
export class NicelistPage {

    niceKids: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alrtCtrl: AlertController, public dataService: DataProvider) {
        this.niceKids = this.dataService.niceKidList;
    }

    addNice(): void {
        let prompt = this.alrtCtrl.create({
            title: "Add to Nice List",
            inputs: [
                {name: "imgPath",
                    placeholder: "type nice(1-5).jpg"},
                {name: "name",
                    placeholder: "What is the child's name?"},
                {name: "desc",
                    placeholder: "Why is this child nice?"}
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Add Nice Kid",
                    handler: data=> {
                        console.log(data);
                        this.dataService.addNiceKid(data);
                    }
                }
            ]
        });
        prompt.present();
    }

    editNice(niceKid): void {
        let prompt = this.alrtCtrl.create({
            title: "Edit from Nice List",
            inputs: [
                {name: "imgPath",
                    value: niceKid.imgPath},
                {name: "name",
                    value: niceKid.name},
                {name: "desc",
                    value: niceKid.desc}
            ],
            buttons: [
                {
                    text: "Cancel"
                },

                {
                    text: "Save",
                    handler: data=> {
                        // let index = this.dataService.indexOf(niceKid);
                        // if (index > -1) {
                        //     this.dataService[index] = data;
                        this.dataService.editNice(niceKid.id, data);
                        }

                }
            ]
        });
        prompt.present();
    }

    clickDelete(niceKid): void {
        // let index = this.niceKids.indexOf(kid);
        //
        // this.niceKids.splice(index, 1)

        this.dataService.clickDelete(niceKid);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardsPage');
    }

}