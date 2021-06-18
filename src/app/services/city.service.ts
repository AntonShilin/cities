import { ICity } from './../interfases/city';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CityService {
  private collection?: AngularFirestoreCollection<ICity>;
  items?: Observable<ICity[]>;

  constructor(private db: AngularFirestore, private messageService: MessageService) {
    this.collection = db.collection<ICity>('cities');
    this.items = this.collection.valueChanges();
  }

  getDataFromFirestore() {
    this.messageService.add('Success!!! Get data from Firestore');
    return this.items;
  }

  getElemById(id: number): Observable<ICity | undefined> {
    this.messageService.add(`Get city number ${id} from Firestore`);
    return this.db.collection<ICity>("cities").doc(id.toString()).valueChanges();
  }

}
