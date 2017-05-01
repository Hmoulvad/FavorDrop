import {Injectable} from '@angular/core'
import {Stop} from "../_models/stop";
import {Subject} from "rxjs/Subject";

@Injectable()
export class OrderService {
  ordersChanged = new Subject<Stop[]>();
  priceChanged = new Subject<number>();

  private Stops: Stop[] = [
  new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'),
  new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time'),
  ];

  private price : number;

  constructor() {
  }

  updatePrice() {
    this.price = this.Stops.length * 80;
    this.priceChanged.next(this.price);
  }

  getPrice() {
    return this.getStops().length * 80;
  }

  getStops () {
    return this.Stops;
  }

  addStop (order : string, address: string, comment: string) {
    this.Stops.push(new Stop(order, address, comment));
    this.ordersChanged.next(this.Stops.slice());
    this.updatePrice();

  }
  getStopIndex(index: number) {
    return this.Stops[index];
  }

  deleteStop(index: number) {
    this.Stops.splice(index,1);
    this.ordersChanged.next(this.Stops.slice());
    this.updatePrice();
  }

  getOrdersFromDB() {
  }
}
