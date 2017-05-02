import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {AuthService} from "./auth.service";
import 'rxjs/Rx'
import {UserService} from "./user.service";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import {Order} from "../_models/order";


  @Injectable()
  export class ServerService {
    constructor(private http: Http, private auth: AuthService, private backend: UserService) {}

    CreateUserInDB(user: any){
      console.log("Token: " + localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('currentUser')});
      let options = new RequestOptions({headers: headers})
        const body = JSON.stringify(user)
        return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.auth.getUserID(), body, options);
      }

    CreateOrderInDB(order: any){
      const body = JSON.stringify(order)

      return this.http.post('http://52.213.91.0:8080/FavorDrop_war/orders/'+this.auth.getUserID(), body);
    }

    GetOrdersFromDB() {
      return this.http.get('http://52.213.91.0:8080/FavorDrop_war/client/'+this.auth.getUserID()+ '/orders')
        .map((res:Response) => this.extractData(res))
    }

      GetClientInfo() {
      let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('currentUser')});
      let options = new RequestOptions({headers: headers});
      console.log(this.auth.getUserID());

      return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.auth.getUserID(),options)
        .map((res:Response) => this.extractData(res))
    }
    private extractData(res: Response) {
      let body = res.json();
      this.backend.user = body;
      return body.data || { };
    }
}

