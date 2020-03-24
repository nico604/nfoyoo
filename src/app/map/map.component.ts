
import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']  
})

export class MapComponent implements AfterViewInit {
  
  private map;

  constructor() { }

  ngAfterViewInit(): void {
  	this.initMap();
  	console.log("Map init");
  }

  private initMap(): void {
		this.map = L.map('map', {
    	center: [ 39.8282, -98.5795 ],
    	zoom: 2
  	});
  	const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		maxZoom: 19,
  		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});

		tiles.addTo(this.map);
  
	}
  

}
