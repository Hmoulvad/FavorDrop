import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthService} from "../auth.service";
import 'rxjs/Rx'
import {UserService} from "./user.service";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';


  @Injectable()
  export class ServerService {
    constructor(private http: Http, private auth: AuthService, private backend: UserService) {}

    TransmitOrderToDB(DBorders: any[]) {
      return this.http.put('https://favordrop.firebaseio.com/OrderFromAngular.json', DBorders);

    }
    CreateUserInDB(user: any){
        const body = JSON.stringify(user)
        return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.auth.getUserID(), body);
      }

      GetClientInfo() {
      return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.auth.getUserID())
        .map((res:Response) => this.extractData(res))
    }
    private extractData(res: Response) {
      let body = res.json();
      this.backend.user = body;
      return body.data || { };
    }
}

