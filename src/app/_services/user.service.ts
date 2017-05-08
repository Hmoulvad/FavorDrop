import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../_models/user";
import {Subject} from "rxjs";
/*
 UserService - Injectable service som har ansvar for brugerobjektet, og backend kald omkring brugeren.
 */
@Injectable()
export class UserService {
  constructor(private http: Http) {}
  user : User = new User();
  usersChanged = new Subject<User>();

  /*
  Update User - Metode som kaldes fra onSubmit metoden i Profilen, som gemmer dataen i user objektet
  og starter HTTP put request til databasen.
   */
  updateUser(name: string, email: string, phone: number, address: string, zip: string, city: string) {
    this.user.name = name;
    this.user.email = email;
    this.user.phone = phone;
    this.user.address = address;
    this.user.zip = zip;
    this.user.city = city;
    this.usersChanged.next(this.user);
    this.CreateUserInDB();
  }

  /*
  Simpel HTTP put request som gemmer brugeren i backend, og som subscriber direkte til.
   */
  CreateUserInDB(){
    console.log("Pushing profile to backend.");
    return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.user.UID, JSON.stringify(this.user), this.jwt()).subscribe();
  }

  /*
  Simpel HTTP get request til at hente brugeren fra backend.
   */
  getClient() {
    return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/'+this.user.UID,this.jwt())
      .map((res:Response) => this.user = res.json());
  }

  /*
  HTTP authorization headeren sættes her med brugeren's token, som bliver valideret af backend.
   */
  private jwt() {
    let headers = new Headers({'Authorization': 'Bearer ' + sessionStorage.getItem('currentUser')});
    return new RequestOptions({headers: headers});
  }
}
