import { Injectable } from '@angular/core';
import {Order} from "../order-module/order";

@Injectable()
export class ShoppingListService {

  private orders: Order[];

  constructor() {
  }

  getOrders() {
    return this.orders;
  }

  addOrder(orders: Order[]) {
    Array.prototype.push.apply(this.orders, orders);
  }

}
