import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  adress: string;
  city: string;
  zipcode: number;

  constructor() { }

  ngOnInit() {
  }

}
