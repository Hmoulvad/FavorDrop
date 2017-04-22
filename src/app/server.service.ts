import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";


  @Injectable()
  export class ServerService {
    constructor(private http: Http) {}

    TransmitOrderToDB(DBorders: any[]) {
      return this.http.put('https://favordrop.firebaseio.com/piske.json', DBorders);

    }

    CreateUserInDB(user: any){
      const body = JSON.stringify(user)
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('https://favordrop.firebaseio.com/clients/.json', body, {
        headers: headers
      })
        .map((data: Response) => data.json());
    }

}
