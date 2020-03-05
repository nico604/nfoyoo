import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australie-pays',
  templateUrl: './australie-pays.component.html',
  styleUrls: ['./australie-pays.component.css']
})
export class AustraliePaysComponent implements OnInit {
	isHome: boolean = false;

  constructor() { }

  ngOnInit() {
		console.log(this.isHome);  	
  }

}
