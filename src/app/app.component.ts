import { Component,OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organism } from 'src/app/organism.model';
import { OrganismService } from 'src/app/organism.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganismListComponent } from './organism-list/organism-list.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	
  title = "directory";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {

  }  

}
