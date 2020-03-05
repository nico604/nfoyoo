import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isHome: boolean = true;


  constructor() {
 
  }

  ngOnInit() {
  	console.log(this.isHome);
  }
}
