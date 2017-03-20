import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order-module/order.service";

@Component({
  selector: 'fd-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  newOrder (name : string, address: string, comment: string) {
    this.orderService.addOrder(name,address,comment);
  }

  ngOnInit() {
  }

}
