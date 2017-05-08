import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-intro-page',
  templateUrl: './intro-page.component.html',
  styles: [require('../../styles.css').toString()]
})
export class IntroPageComponent implements OnInit {

  delivery : string;
  zipcode : string;
  valuenumber : number;

  constructor() {
  }

  onSearch(form : NgForm) {
    const value = form.value.zipcode;
    this.zipcode = value.toString();
    this.valuenumber = +this.zipcode;
    console.log(this.valuenumber);
    if (this.valuenumber > 1700 && this.valuenumber < 2920) {
      this.delivery = "Vi leverer til dit post nummer";
    }
    else {
      this.delivery = "Vi leverer ikke til dit post nummer";
    }
  }

  ngOnInit() {

  }
}
