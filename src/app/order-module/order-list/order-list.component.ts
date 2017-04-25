import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../order";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ServerService} from "../../server.service";

@Component({
  selector: 'fd-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private Mot: AuthService, private Rout: Router, private serverService: ServerService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }
  dbtest() {
    this.Mot.dbcall();
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
    this.serverService.TransmitOrderToDB(this.orders)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
