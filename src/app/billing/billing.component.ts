import { Component, OnInit } from '@angular/core';
import {Order} from "../order-module/order";
import {OrderService} from "../order-module/order.service";

@Component({
  selector: 'fd-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
