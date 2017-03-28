import {Injectable} from '@angular/core'
import {Order} from "./order";

@Injectable()
export class OrderService {

  private orders: Order[] = [
  new Order('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'),
  new Order('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time'),
  ];

  counter: number = this.orders.length;

  constructor() {}

  getOrders () {
    return this.orders;
  }

  addOrder (name : string, address: string, comment: string) {
    this.orders.push(new Order(name, address, comment));
    this.counter++;
  }
  getOrderIndex(id: number) {
    return  this.orders[id];
  }

  deleteOrder(order: Order) {
    this.orders.splice(this.orders.indexOf(order), 1)
  }

}
