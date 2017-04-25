import { Component, OnInit } from '@angular/core';
import {Order} from "./order";
import {OrderService} from "./order.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ServerService} from "../_services/server.service";


@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent implements OnInit {

  constructor(private orderService: OrderService, private Mot: AuthService, private Rout: Router, private serverService: ServerService) { }

  orders: Order[] = [];

  anyOrder() {
    if (this.orderService.getOrders().length > 0 )
      return true;
  }

  ngOnInit() {
  }

  dbtest() {
    this.Mot.dbcall();
  }

  finishOrder() {
    this.onSave();
    this.authertest();
  }

  authertest() {
    if(this.Mot.isAuthenticated()) {
      this.Rout.navigate(['/order-result']);
    }
    else {
      console.log("user not logged in")
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
