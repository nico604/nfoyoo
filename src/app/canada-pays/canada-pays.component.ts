import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canada-pays',
  templateUrl: './canada-pays.component.html',
  styleUrls: ['./canada-pays.component.css']
})
export class CanadaPaysComponent implements OnInit {
	isHome: boolean = false;

  constructor() {
 
  }

  ngOnInit() {
  	console.log(this.isHome);
  }

}
