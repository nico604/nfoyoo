import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})

export class PaysComponent implements OnInit {

  name: string;

  constructor(
  	private route: ActivatedRoute,
	  private location: Location,
  	) { }

  ngOnInit() {
  	this.salutPays();

  }
  salutPays() {
  	this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      console.log(params.has('name'));
    })
  }
}
