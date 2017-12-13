import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cards',
    templateUrl: 'naughtylist.html',
})
export class NaughtylistPage {

    naughtyKids = [
        {
            imgPath: "naughty1.jpg",
            name: "Peter",
            desc: "His dad likes sports too much."
        },
        {
            imgPath: "naughty2.jpg",
            name: "Annabelle",
            desc: "She didn't get to play the claw game."
        },
        {
            imgPath: "naughty3.jpg",
            name: "Sean",
            desc: "He beat up his parents."
        },
        {
            imgPath: "naughty4.jpg",
            name: "April",
            desc: "She wanted a pony."
        },
        {
            imgPath: "naughty5.jpg",
            name: "Tina",
            desc: "Using psychic powers for evil intents."
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public alrtCtrl: AlertController) {

    }

    addNaughty() {
        let prompt = this.alrtCtrl.create({
            title: "Add to Naughty List",
            inputs: [
                {name: "imgPath",
                    placeholder: "type naughty(1-5).jpg"},
                {name: "name",
                    placeholder: "What is the child's name?"},
                {name: "desc",
                    placeholder: "Why is this child bad?"}
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Add Naughty Kid",
                    handler: data=> {
                        console.log(data);
                        this.naughtyKids.push(data);
                    }
                }
            ]
        });
        prompt.present();
    }

    editNaughty(kid) {
        let prompt = this.alrtCtrl.create({
            title: "Edit from Naughty List",
            inputs: [
                {name: "imgPath",
                    value: kid.imgPath},
                {name: "name",
                    value: kid.name},
                {name: "desc",
                    value: kid.desc}
            ],
            buttons: [
                {
                    text: "Cancel"
                },

                {
                    text: "Save",
                    handler: data=> {
                        let index = this.naughtyKids.indexOf(kid);
                        if (index > -1) {
                            this.naughtyKids[index] = data;
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    clickDelete(kid) {
        let index = this.naughtyKids.indexOf(kid);

        this.naughtyKids.splice(index, 1)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardsPage');
    }

}