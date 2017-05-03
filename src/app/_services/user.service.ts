import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  user : User = new User();

  updateUser(UID: string,name: string, email: string, phone: string, address: string, zip: number, city: string) {
    this.user.UID = UID;
    this.user.name = name;
    this.user.email = email;
    this.user.phone = phone;
    this.user.address = address;
    this.user.zip = zip;
    this.user.city = city;
  }

  getUser() {
    return this.user;
  }

  CreateUserInDB(user: any){
    return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.user.UID, JSON.stringify(user), this.jwt());
  }

  getClient() {
    return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.user.UID,this.jwt())
      .map((res:Response) => this.extractClient(res))
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

  private extractClient(res: Response) {
    let body = res.json();
    this.user = body;
    return body.data || { };
  }
}
