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
    //new Order(this.userService.user, "13:03", [new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'), new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')]),
    //new Order(this.userService.user, "13:03", [new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'), new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')])
  ];
  currentOrder: Order = new Order(
    this.userService.user,"13:03", [
      //new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'),
      //new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')
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

  sendOrderToDB() {
    this.currentOrder.user = this.userService.user;
    console.log(this.currentOrder);
    this.CreateOrderInDB(this.currentOrder);
    this.currentOrder = new Order(this.userService.user,"",[]);
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
