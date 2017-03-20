import { Component, OnInit } from '@angular/core';
import {Order} from "./order";

@Component({
  selector: 'fd-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent implements OnInit {

  selectedOrder: Order;

  constructor() { }

  ngOnInit() {
  }

}
