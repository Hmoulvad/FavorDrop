import { Component, OnInit } from '@angular/core';
import {Stop} from "../../_models/stop";
import {OrderService} from "../../_services/order.service";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";
/*
 BillingComponent - Komponentet indeholder en form, hvor brugeren færdiggør sin bestilling,
 til demonstration
 */
@Component({
  selector: 'fd-order-payment',
  templateUrl: 'order-payment.component.html'
})
export class OrderPaymentComponent implements OnInit {
  stops: Stop[] = [];

  formname: string;
  formphone: number;
  formaddress: string;
  formzip: string;
  formcity: string;

  constructor(private orderService: OrderService, private userService: UserService,private router : Router) { }
  /*
   OnInit metoden indlæser brugerens data direkte fra bruger objektet.
   */
  ngOnInit() {
    this.formname = this.userService.user.name;
    this.formphone = this.userService.user.phone;
    this.formaddress = this.userService.user.address;
    this.formzip = this.userService.user.zip;
    this.formcity = this.userService.user.city;
    this.stops = this.orderService.getStops();
  }

  /*
   onSubmit metoden navigere brugeren til profil siden, og sender ordren til backend.
   */
  onSubmit() {
    this.router.navigate(['/billing']);
    this.orderService.sendOrderToDB();
  }
}
