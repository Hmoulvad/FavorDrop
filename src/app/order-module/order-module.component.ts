import { Component, OnInit } from '@angular/core';
import {OrderService} from "../_services/order.service";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import {ServerService} from "../_services/server.service";
import {Stop} from "../_models/stop";

@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styles: [require('../../styles.css').toString()]
})
export class OrderModuleComponent implements OnInit {

  constructor(private orderService: OrderService, private Mot: AuthService, private Rout: Router, private serverService: ServerService) { }

  stops: Stop[] = [];

  anyStop() {
    if (this.orderService.getStops().length > 0 )
      return true;
  }

  ngOnInit() {
  }

  finishOrder() {
    if (this.Mot.isAuthenticated()) {
      this.Rout.navigate(['billing'])
    }
    else {
      this.Rout.navigate(['user-login'])
    }

  }
}
