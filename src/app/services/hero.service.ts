import { MessageService } from './message.service';
import { IHero } from './../interfases/hero';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private collection?: AngularFirestoreCollection<IHero>;
  items?: Observable<IHero[]>;

  constructor(private db: AngularFirestore, private messageService: MessageService) {
    this.collection = db.collection<IHero>('heroes');
    this.items = this.collection.valueChanges();
  }

  getDataFromFirestore() {
    this.messageService.add('Success!!! Get data from Firestore');
    return this.items;
  }

  getElemById(id: number): Observable<IHero | undefined> {
    this.messageService.add(`Get hero number ${id} from Firestore`);
    return this.db.collection<IHero>("heroes").doc(id.toString()).valueChanges();
  }

}
