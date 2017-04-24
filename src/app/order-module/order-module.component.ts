import { Component, OnInit } from '@angular/core';
import {Order} from "./order";
import {OrderService} from "./order.service";

@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent implements OnInit {

  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  anyOrder() {
    if (this.orderService.getOrders().length > 0 )
      return true;
  }

  ngOnInit() {
  }

}
