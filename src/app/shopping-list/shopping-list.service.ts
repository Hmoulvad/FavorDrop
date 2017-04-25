import { Injectable } from '@angular/core';
import {Order} from "../order-module/order";
import {ServerService} from "../_services/server.service";

@Injectable()
export class ShoppingListService {

  private orders: Order[];

  constructor(private serverservice: ServerService) {
  }

  getOrders() {
    return this.orders;
  }

  addOrder(orders: Order[]) {
    Array.prototype.push.apply(this.orders, orders);
  }

}
