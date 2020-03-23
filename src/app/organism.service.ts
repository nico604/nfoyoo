import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Organism } from 'src/app/organism.model';
import { Pays } from 'src/app/pays';
//import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { OrganismsFake } from './fakeData';
import { PaysFake } from './fakePays';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})	

export class OrganismService {
	//private organisms: Organism[];
  //private enAction: MessageService;

  constructor(private ms: MessageService) {  }

  getOrganisms(): Organism[]{
    //return this.firestore.collection('organism').snapshotChanges();
    
    return OrganismsFake;
  }
  getPays(): Pays[]{
    this.ms.add('Service organism en action');
  	return PaysFake;
  }

}
