import {Injectable} from "@angular/core";
import {Http, Headers, Response, Jsonp} from "@angular/http";
import {AuthService} from "./auth.service";


  @Injectable()
  export class ServerService {
    constructor(private http: Http, private auth: AuthService) {}

    TransmitOrderToDB(DBorders: any[]) {
      return this.http.put('https://favordrop.firebaseio.com/OrderFromAngular.json', DBorders);

    }

    CreateUserInDB(user: any){
      const body = JSON.stringify(user)
      const headers = new Headers({'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':['OPTIONS', 'GET', 'POST'], 'Access-Control-Allow-Headers': 'Content-Type'});
      return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.auth.token, body);

    }

}
