import { Component,OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organism } from 'src/app/organism.model';
import { OrganismService } from 'src/app/organism.service';
import { Pays } from 'src/app/pays';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganismListComponent } from './organism-list/organism-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	
  title = "directory";
  pays: Pays[];
  
  constructor(private og: OrganismService) { }

  ngOnInit() {
    this.getPays();
    console.log("init app");
  }

  getPays(): void{
    this.pays = this.og.getPays();
  }
}
