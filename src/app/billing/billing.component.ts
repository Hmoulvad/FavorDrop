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

  formname: string;
  formphone: number;
  formaddress: string;
  formzip: string;
  formcity: string;

  constructor(private orderService: OrderService, private userService: UserService,private router : Router) { }

  ngOnInit() {
    this.formname = this.userService.user.name;
    this.formphone = this.userService.user.phone;
    this.formaddress = this.userService.user.address;
    this.formzip = this.userService.user.zip;
    this.formcity = this.userService.user.city;
    this.stops = this.orderService.getStops();
  }

  onSubmit() {
    this.router.navigate(['profile-page']);
    this.orderService.sendOrderToDB();
  }
}
