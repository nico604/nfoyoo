import { Component, OnInit } from '@angular/core';
import { OrganismService } from 'src/app/organism.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Organism } from 'src/app/organism.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-organism-list',
  templateUrl: './organism-list.component.html',
  styleUrls: ['./organism-list.component.css'],
  providers: [ OrganismService ]
})

export class OrganismListComponent implements OnInit {
	
  organisms: Organism[];
  organismSelect: Organism; 
  //private organismsCollection: AngularFirestoreCollection<Organism>;

  constructor(private organismService: OrganismService) { }

  ngOnInit() {
    this.organisms = this.organismService.getOrganisms(); 
    console.log(this.organisms);
  }

  selectOrganism(organism: Organism){
    this.organismSelect = organism;
  }
}