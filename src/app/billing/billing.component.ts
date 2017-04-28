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

  username: string = 'Hannibal B. Moulvad';
  email: string = 'Hmoulvad@hotmail.com';
  address: string = 'Rantzausgade 28B';
  zipcode: string = '2200' ;
  city: string = 'København N';


  constructor(private orderService: OrderService, private userService: UserService ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();

    this.username = "Skriv dit navn her";
    this.email= "Din email";
    this.address = "Din adresse";
    this.city= "Din by";
    this.zipcode= "dit postnummer";

    if(this.userService.user != null) {
      this.username  = this.userService.user.name;
      this.email = this.userService.user.email;
      this.address = this.userService.user.address;
      this.city = this.userService.user.city;
      this.zipcode = this.userService.user.phone;



    }
  }

}
