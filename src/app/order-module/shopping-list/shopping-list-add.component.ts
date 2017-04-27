import {Component, OnInit} from '@angular/core';
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {OrderService} from "../order.service";
import {ServerService} from "../../_services/server.service";

@Component({
  selector: 'fd-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private orderService: OrderService, private serverService: ServerService) { }

  newOrder (order : string, address: string, comment: string) {
    this.orderService.addOrder(order,address,comment);
  }

  ngOnInit() {
  }

}
