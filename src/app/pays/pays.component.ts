import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, LatLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-pays',
  templateUrl: './paypors.component.html',
  styleUrls: ['./pays.component.css']
})

export class PaysComponent implements OnInit {

  name: string;
  coord: [number, number];
  coord = [ 39.8282, -98.5795 ]; 

  options: any = {
    layers: [
      tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        { 
          maxZoom: 18, 
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
        }
      )
    ],
    zoom: 5,
    center: latLng(this.coord)
  };

  constructor(
  	private    route: ActivatedRoute,
	  private location: Location,
    private enAction: MessageService,
    private   router: Router
	) { }

  ngOnInit() {
  	this.salutPays();
    this.enAction.add("pays.component en action");
  }
  
  salutPays() {

  	this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      if ( this.name == "Bermudes"){
        console.log('Bermuded');
        this.coord = [46.879966,-121.726909];
      } if (this.name == "Canada") {
        console.log('Canaded');
        this.coord = [ 39.8282, -98.5795 ]; 
      }
    })
  
  }
  
  gotoHeroes() {
    this.router.navigate(['/']);
  }

}
