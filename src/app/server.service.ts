import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

  @Injectable()
  export class ServerService {
    constructor(private http: Http) {}
    TransmitOrderToDB(DBorders: any[]) {
      return this.http.put('https://favordrop.firebaseio.com/ordersFromAngular.json', DBorders);
    }

    OrdersFromDB (DBorders: any[]) {
      return this.http.get('https://favordrop.firebaseio.com/ordersFromAngular.json', DBorders)    ;
    }
}
