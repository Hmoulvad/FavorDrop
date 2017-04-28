import { Component, OnInit } from '@angular/core';
import {Order} from "./order";
import {OrderService} from "./order.service";
import {AuthService} from "../auth.service";
import {Router, Routes} from "@angular/router";
import {ServerService} from "../_services/server.service";
import {Response} from "@angular/http";
import {UserService} from "../_services/user.service";



@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent implements OnInit {

  selectedOrder: Order;
  constructor(private orderService: OrderService, private Mot: AuthService, private Rout: Router, private serverService: ServerService) { }

  orders: Order[] = [];

  anyOrder() {
    if (this.orderService.getOrders().length > 0 )
      return true;
  }

  ngOnInit() {
  }

  finishOrder() {
    this.onSave();
    if (this.Mot.isAuthenticated()) {
      this.Rout.navigate(['billing'])
    }
    else {
      console.log("User is not logged in")
    }

  }

  onSave() {
    this.orders == this.orderService.getOrders();
    this.serverService.TransmitOrderToDB(this.orders)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
