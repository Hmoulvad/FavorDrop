import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'fd-priceestimate',
  templateUrl: './priceestimate.component.html',
  styleUrls: ['./priceestimate.component.css']
})
export class PriceestimateComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  price: number = this.orderService.getOrders().length*50;

  priceEstimate() {
    this.price = this.orderService.getOrders().length*50;
  }

  ngOnInit() {
  }

}
