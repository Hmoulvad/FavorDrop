import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Stop} from "../../_models/stop";
import {OrderService} from "../../_services/order.service";

@Component({
  selector: 'fd-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  price: number;
  stops: Stop[];
  private subscription : Subscription;
  private subscriptionprice : Subscription;

  constructor(private orderService: OrderService) {
    this.price = this.orderService.getPrice();
  }

  ngOnInit() {
    this.subscription = this.orderService.ordersChanged
      .subscribe(
        (stops: Stop[]) => {
          this.stops = stops;
        }
      )
    this.stops = this.orderService.getStops();
    this.subscriptionprice = this.orderService.priceChanged
      .subscribe(
        (price: number) => {
          this.price = price
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionprice.unsubscribe()
  }

}
