import {Injectable} from '@angular/core'
import {Stop} from "../_models/stop";
import {Subject} from "rxjs/Subject";
import {Order} from "../_models/order";
import {UserService} from "./user.service";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
  /*
  OrderService - Injectable service som har ansvar for ordre objektet, og backend kald omkring ordre.
  */
@Injectable()
export class OrderService {
  constructor(private userService: UserService, private http: Http) {}

  /*
  We are passing ordersChanged and priceChanged as subjects, which makes them observable. So we an subscribe to them.
  */

  ordersChanged = new Subject<Stop[]>();
  priceChanged = new Subject<number>();
  public orderHistory: Order[] = [];
  currentOrder: Order = new Order("", 0, []);

  private price : number;

  /*
   updatePrice sørger for at opdaterer prisen, og bruger .next()-metoden, for at parse det til subscription.
   */

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

  /*
   addStop tilføjer et stop, og yderligere opdaterer stops-array'ets subscription og
   */

  addStop (order : string, address: string, comment: string) {
    this.currentOrder.stops.push(new Stop(order, address, comment));
    this.ordersChanged.next(this.currentOrder.stops.slice());
    this.updatePrice();
  }

  /*
   Returns the stop index. Used for showing the correct stop in the OrderDetailComponent.
   */

  getStopIndex(index: number) {
    return this.currentOrder.stops[index];
  }

  /*
   Deletes a stop based on its passed index.
   */

  deleteStop(index: number) {
    this.currentOrder.stops.splice(index,1);
    this.ordersChanged.next(this.currentOrder.stops.slice());
    this.updatePrice();
  }

  /*
   Used to parse a timestamp when an order is sent the the backend.
   */

  dateStamp: string;
  getTimeStamp() {
    this.dateStamp = new Date().getHours().toString() + ":" + new Date().getMinutes().toString() + " " + new Date().getDate().toString() + "/" + (new Date().getMonth() + 1).toString() + "/" + new Date().getFullYear().toString();
    return this.dateStamp;
  }

  /*
   Sends the order to the backend with an timestamp and a price.
   Then initializes currentOrder with a new Order empty order objekt.
   */

  sendOrderToDB() {
    this.currentOrder.time = this.getTimeStamp();
    this.currentOrder.price = this.currentOrder.stops.length*80;
    this.CreateOrderInDB(this.currentOrder);
    this.orderHistory.push(this.currentOrder);
    this.currentOrder = new Order("",0,[]);
  }

  CreateOrderInDB(order: any){
    console.log("Pushing order to backend.");
    return this.http.post('http://52.213.91.0:8080/FavorDrop_war/clients/'+ this.userService.user.UID +'/orders/new/', JSON.stringify(order), this.jwt()).subscribe();
  }

  GetOrdersFromDB() {
    return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/'+ this.userService.user.UID + '/orders/completed',this.jwt())
      .map((response: Response) => this.extractOrders(response));
  }

  private jwt() {
    let headers = new Headers({'Authorization': 'Bearer ' + sessionStorage.getItem('currentUser'), 'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  private extractOrders(res: Response) {
    let body = res.json();
    console.log("Orders: " + JSON.stringify(body));
    this.orderHistory = body;
    return body.data || { };
  }
}
