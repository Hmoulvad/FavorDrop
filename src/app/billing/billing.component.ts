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
  }

}
