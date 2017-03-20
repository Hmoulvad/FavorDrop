import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../order";

@Component({
  selector: 'fd-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  @Output() orderSelected = new EventEmitter<Order>();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  onSelected(order: Order) {
    this.orderSelected.emit(order)
  }
}
