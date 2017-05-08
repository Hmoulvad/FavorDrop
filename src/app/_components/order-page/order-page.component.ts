import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../_services/order.service";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import {Stop} from "../../_models/stop";

@Component({
  selector: 'fd-order-page',
  templateUrl: 'order-page.component.html'
})
export class OrderPageComponent implements OnInit {

  constructor(private orderService: OrderService, private Rout: Router) { }

  anyStop() {
    if (this.orderService.getStops().length > 0 )
      return true;
  }

  ngOnInit() {
  }

  finishOrder() {
    if (sessionStorage.getItem('currentUser')) {
      this.Rout.navigate(['order-payment'])
    }
    else {
      this.Rout.navigate(['user-login'])
    }

  }
}
