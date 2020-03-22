import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/pays';
import { OrganismService } from 'src/app/organism.service';
import { PaysFake } from './fakePays';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  pays: Pays[];
    	
  constructor(private og: OrganismService) { }

  ngOnInit() {
  	this.getPays();
  }

  getPays(): void {
    this.pays = this.og.getPays();
  }

}
