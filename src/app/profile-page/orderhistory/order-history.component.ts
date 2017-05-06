import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../_services/order.service";
import {Order} from "../../_models/order";

@Component({
  selector: 'fd-order-history',
  templateUrl: './order-history.component.html',
  styles: [require('../../../styles.css').toString()]
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orders = this.orderService.orderHistory;
  }
}
