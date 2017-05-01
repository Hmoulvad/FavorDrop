import {Injectable} from '@angular/core'
import {Stop} from "../_models/stop";
import {ServerService} from "../server.service";
import {subscribeOn} from "rxjs/operator/subscribeOn";

@Injectable()
export class OrderService {

  private stops: Stop[] = [
  new Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200','Uden bolle, Wrapped i Bacon'),
  new Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time'),
  ];

  counter: number = this.stops.length;

  constructor(private serverService: ServerService) {}

  getStops () {
    return this.stops;
  }

  addStop (name : string, address: string, comment: string) {
    this.stops.push(new Stop(name, address, comment));
    this.counter++;
  }
  getStopIndex(id: number) {
    return  this.stops[id];
  }

  deleteStop(stop: Stop) {
    this.stops.splice(this.stops.indexOf(stop), 1)
  }

  getOrdersFromDB() {
    this.serverService.OrdersFromDB(this.stops)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
