import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})

export class PaysComponent implements OnInit {
  constructor(
  	private route: ActivatedRoute,
	  private location: Location,
  	) { }

  ngOnInit() {
  	this.salutPays();

  }
  salutPays() {
  	  const name = this.route.snapshot.paramMap.get('name');
  	  this.name = name;
  	  return name;
  }

}
