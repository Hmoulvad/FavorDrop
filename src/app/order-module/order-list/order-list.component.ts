import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../order";
import {Subscription} from "rxjs";

@Component({
  selector: 'fd-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  price: number;
  orders: Order[];
  private subscription : Subscription;
  private subscriptionprice : Subscription;

  constructor(private orderService: OrderService) {
    this.price = this.orderService.getPrice();
  }

  ngOnInit() {
    this.subscription = this.orderService.ordersChanged
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      )
    this.orders = this.orderService.getOrders();
    this.subscriptionprice = this.orderService.priceChanged
      .subscribe(
        (price: number) => {
          this.price = price
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
