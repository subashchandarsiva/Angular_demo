import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  categories;
  contact;
  promo;

  constructor(service:FormService) { 
this.categories=service.getCategory();
this.contact=service.getContact();
this.promo=service.getPromo();
  }

  submit(display) {
    console.log(display)
  }

  ngOnInit() {
  }

}

