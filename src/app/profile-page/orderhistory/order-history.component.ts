import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Stop} from "../../_models/stop";
import {OrderService} from "../../_services/order.service";
import {Order} from "../../_models/order";

@Component({
  selector: 'fd-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getLatestOrder();
  }

  ngOnDestroy() {
  }

}
