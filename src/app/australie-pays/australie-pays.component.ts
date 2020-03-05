import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australie-pays',
  templateUrl: './australie-pays.component.html',
  styleUrls: ['./australie-pays.component.css']
})
export class AustraliePaysComponent implements OnInit {
	pays: string = "canada";


  constructor() { }

  ngOnInit() {
		console.log(this.pays);  	
  }

}
