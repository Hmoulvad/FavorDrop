import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../order";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ServerService} from "../../_services/server.service";

@Component({
  selector: 'fd-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  price: number;
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.price = this.orderService.getOrders().length * 80;
    this.orders = this.orderService.getOrders()
  }


}
