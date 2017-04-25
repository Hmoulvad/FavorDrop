import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order-module/order.service";
import {ServerService} from "../_services/server.service";
import {subscribeOn} from "rxjs/operator/subscribeOn";

@Component({
  selector: 'fd-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  john: string = 'john';

  constructor(private orderService: OrderService, private serverService: ServerService) { }

  newOrder (name : string, address: string, comment: string) {
    this.orderService.addOrder(name,address,comment);
  }

  ngOnInit() {
  }

}
