import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable } from "rxjs";

export interface NiceKid {
id?: string;
desc: string;
imgPath: string;
name: string;
}


@Injectable()
export class DataProvider {

    niceKidsListRef: AngularFirestoreCollection<NiceKid>;
    niceKidList: Observable<NiceKid[]>;

    constructor(private afs: AngularFirestore) {
        this.niceKidsListRef = this.afs.collection<NiceKid>('Nice');
        this.niceKidList = this.niceKidsListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as NiceKid;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });
    }

    addNiceKid(nicedata){
        this.niceKidsListRef.add(nicedata);
    }

    clickDelete(niceKid): void {
        this.niceKidsListRef.doc(niceKid.id).delete();
    }

    editNice(niceid, newdata) {
        this.niceKidsListRef.doc(niceid).update(newdata);
    }
}