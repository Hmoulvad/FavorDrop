import {Injectable} from '@angular/core'
import {Stop} from "../_models/stop";
import {Subject} from "rxjs/Subject";
import {Order} from "../_models/order";
import {UserService} from "./user.service";
import {ServerService} from "./server.service";

@Injectable()
export class OrderService {
  ordersChanged = new Subject<Stop[]>();
  priceChanged = new Subject<number>();
  private latestOrders: Order[] = [
    new Order(this.userService.user, "13:03", [new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'), new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')]),
    new Order(this.userService.user, "13:03", [new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'), new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')])
  ];
  currentOrder: Order = new Order(this.userService.user,"13:03", [new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'), new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')]);

  private price : number;

  constructor(private userService: UserService, private serverService : ServerService) {
  }

  updatePrice() {
    this.price = this.currentOrder.stops.length * 80;
    this.priceChanged.next(this.price);
  }

  getPrice() {
    return this.getStops().length * 80;
  }

  getStops () {
    return this.currentOrder.stops;
  }

  addStop (order : string, address: string, comment: string) {
    this.currentOrder.stops.push(new Stop(order, address, comment));
    this.ordersChanged.next(this.currentOrder.stops.slice());
    this.updatePrice();

  }
  getStopIndex(index: number) {
    return this.currentOrder.stops[index];
  }

  deleteStop(index: number) {
    this.currentOrder.stops.splice(index,1);
    this.ordersChanged.next(this.currentOrder.stops.slice());
    this.updatePrice();
  }

  // 1. Put request til at oprette ordre.

  sendOrderToDB() {
    this.currentOrder.user = this.userService.user;
    this.serverService.CreateOrderInDB(this.currentOrder);
    console.log(this.currentOrder);
  }

  getLatestOrder() {
    //this.serverService.GetOrdersFromDB();
    return this.latestOrders;
  }

}
