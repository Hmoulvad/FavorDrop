import {Injectable} from '@angular/core'
import {Order} from "./order";
import {Subject} from "rxjs/Subject";

@Injectable()
export class OrderService {
  ordersChanged = new Subject<Order[]>();
  priceChanged = new Subject<number>();

  private orders: Order[] = [
  //new Order('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'),
  //new Order('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time'),
  ];

  private price : number;

  constructor() {
  }

  updatePrice() {
    this.price = this.orders.length * 80;
    this.priceChanged.next(this.price);
  }

  getPrice() {
    return this.getOrders().length * 80;
  }

  getOrders () {
    return this.orders;
  }

  addOrder (order : string, address: string, comment: string) {
    this.orders.push(new Order(order, address, comment));
    this.ordersChanged.next(this.orders.slice());
    this.updatePrice();

  }
  getOrderIndex(index: number) {
    return this.orders[index];
  }

  deleteOrder(index: number) {
    this.orders.splice(index,1);
    this.ordersChanged.next(this.orders.slice());
    this.updatePrice();
  }

  getOrdersFromDB() {
    this.serverService.OrdersFromDB(this.orders)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
