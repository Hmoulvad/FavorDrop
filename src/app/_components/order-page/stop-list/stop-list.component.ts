import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../../../_services/order.service";
import {Subscription} from "rxjs";
import {Stop} from "../../../_models/stop";

@Component({
  selector: 'fd-stop-list',
  templateUrl: 'stop-list.component.html'
})
export class StopListComponent implements OnInit, OnDestroy {

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
      );
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
