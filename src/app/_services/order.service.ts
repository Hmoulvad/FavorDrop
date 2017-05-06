import {Injectable} from '@angular/core'
import {Stop} from "../_models/stop";
import {Subject} from "rxjs/Subject";
import {Order} from "../_models/order";
import {UserService} from "./user.service";
import {Headers, RequestOptions, Http, Response} from "@angular/http";

@Injectable()
export class OrderService {
  constructor(private userService: UserService, private http: Http) {

  }

  ordersChanged = new Subject<Stop[]>();
  priceChanged = new Subject<number>();
  public orderHistory: Order[] = [

  ];
  currentOrder: Order = new Order(
    "", 0, [
    ]
  );

  private price : number;

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

  getTimeStamp() {
    return new Date().getHours().toString() + ":" +new Date().getMinutes().toString()+ " "+new Date().getDay().toString()+"/"+new Date().getMonth().toString()+"/"+new Date().getFullYear().toString();
  }

  sendOrderToDB() {
    console.log(this.currentOrder);
    this.currentOrder.time = this.getTimeStamp();
    this.currentOrder.price = this.getPrice();
    this.CreateOrderInDB(this.currentOrder);
    this.currentOrder = new Order("",0,[]);
  }

  getOrderHistory() {
    return this.orderHistory;
  }
  CreateOrderInDB(order: any){
    console.log(JSON.stringify(order));
    return this.http.post('http://52.213.91.0:8080/FavorDrop_war/clients/'+ this.userService.user.UID +'/orders/new/', JSON.stringify(order), this.jwt()).subscribe();
  }

  GetOrdersFromDB() {
    return this.http.get('http://52.213.91.0:8080/FavorDrop_war/client/'+ this.userService.user.UID + '/orders',this.jwt())
      .map((res:Response) => this.extractOrders(res))
  }

  private jwt() {
    let headers = new Headers({'Authorization': 'Bearer ' + sessionStorage.getItem('currentUser'), 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return options;
  }

  private extractOrders(res: Response) {
    let body = res.json();
    this.orderHistory = body;
    return body.data || { };
  }
}
