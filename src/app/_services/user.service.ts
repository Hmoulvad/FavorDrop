import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  user : User = new User();

  updateUser(name: string, email: string, phone: string, address: string, zip: string, city: string) {
    if (name)
      this.user.name = name;
    if (email)
      this.user.email = email;
    if (phone)
      this.user.phone = phone;
    if (address)
      this.user.address = address;
    if (zip)
      this.user.zip = zip;
    if (city)
      this.user.city = city;
    console.log(JSON.stringify(this.user));
    this.CreateUserInDB();
  }

  CreateUserInDB(){
    return this.http.put('http://52.213.91.0:8080/FavorDrop_war_no_auth/clients/'+this.user.UID, JSON.stringify(this.user), this.jwt()).subscribe();
  }

  getClient() {
    return this.http.get('http://52.213.91.0:8080/FavorDrop_war_no_auth/clients/'+this.user.UID,this.jwt())
      .map((res:Response) => this.user = res.json());
  }

  private jwt() {
    let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('currentUser')});
    let options = new RequestOptions({headers: headers});
    return options;
  }

  private extractClient(res: Response) {
    let body = res.json();
    this.user = body;
    return body.data || { };
  }
}
