import {User} from "./user";
import {Stop} from "./stop";

export class Order {
  private _user : User;
  stops : Stop[];

  constructor(user : User, stops : Stop[]) {
    this._user = user;
    this.stops = stops;
  }


  set user(value: User) {
    this._user = value;
  }
}
