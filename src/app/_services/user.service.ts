import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  user : User;

  updateUser(name: string, email: string, phone: string, address: string, zip: number, city: string) {
    this.user = new User(name,email,phone,address,zip,city);
  }

  getUser() {
    return this.user;
  }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.put('http://52.../clients/',user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('http://52.../clients/',user, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
