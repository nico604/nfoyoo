import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Organism } from 'src/app/organism.model';
import { Pays } from 'src/app/pays';
//import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { OrganismsFake } from './fakeData';
import { PaysFake } from './fakePays';

@Injectable({
  providedIn: 'root',
})	
export class OrganismService {
	//private organisms: Organism[];

  constructor() {  }

  getOrganisms(): Organism[]{
    //return this.firestore.collection('organism').snapshotChanges();
    
    return OrganismsFake;
  }
  getPays(): Pays[]{
  	return PaysFake;
  }
}
