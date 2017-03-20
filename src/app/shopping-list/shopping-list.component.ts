import { Component, OnInit } from '@angular/core';
import {Order} from "../order-module/order";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'fd-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private  sls: ShoppingListService) { }

  ngOnInit() {
    this.orders = this.sls.getOrders();
  }

}
