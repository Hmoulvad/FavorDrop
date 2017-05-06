import { Component, OnInit } from '@angular/core';
import {Stop} from "../_models/stop";
import {OrderService} from "../_services/order.service";
import {UserService} from "../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'fd-billing',
  templateUrl: './billing.component.html',
  styles: [require('../../styles.css').toString()]
})
export class BillingComponent implements OnInit {
  stops: Stop[] = [];

  username: string;
  email: string;
  address: string;
  zipcode: string;
  city: string;

  constructor(private orderService: OrderService, private userService: UserService,private router : Router) { }

  ngOnInit() {
    this.username = this.userService.user.name;
    this.email = this.userService.user.email;
    this.address = this.userService.user.address;
    this.zipcode = this.userService.user.zip;
    this.city = this.userService.user.city;
    this.stops = this.orderService.getStops();
  }

  onSubmit() {
    console.log("JEG HAR TRYKKET PÅ KNAPPEN")
    this.router.navigate(['order-status'])
    this.orderService.sendOrderToDB();
  }
}
