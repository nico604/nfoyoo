import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

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
    private enAction: MessageService,
    private router: Router
	) { }

  ngOnInit() {
  	this.salutPays();
    this.enAction.add("pays.component en action");
  }
  
  salutPays() {
  	this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      console.log(params.has('name'));
    })
  }
  
  gotoHeroes() {
    this.router.navigate(['/']);
  }


}
