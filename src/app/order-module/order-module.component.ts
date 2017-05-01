import { Component, OnInit } from '@angular/core';
import {OrderService} from "../_services/order.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ServerService} from "../_services/server.service";
import {Stop} from "../_models/stop";

@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
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
    this.onSave();
    if (this.Mot.isAuthenticated()) {
      this.Rout.navigate(['billing'])
    }
    else {
      console.log("User is not logged in")
    }

  }

  onSave() {
    this.stops == this.orderService.getStops();
    this.serverService.TransmitOrderToDB(this.stops)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
