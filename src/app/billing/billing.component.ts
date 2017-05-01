import { Component, OnInit } from '@angular/core';
import {Order} from "../order-module/order";
import {OrderService} from "../order-module/order.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'fd-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  orders: Order[] = [];
  username: string = "Skriv dit navn her";
  email: string = "Din email";
  address: string = "Din adresse";
  zipcode: string = "Din by";
  city: string = "dit postnummer";

  constructor(private orderService: OrderService, private userService: UserService ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();

    if(this.userService.user != null) {
      this.username  = this.userService.user.name;
      this.email = this.userService.user.email;
      this.address = this.userService.user.address;
      this.city = this.userService.user.city;
      this.zipcode = this.userService.user.phone;
    }
  }
  finishorder() {
    this.orderService.TransitAction();
  }
}
