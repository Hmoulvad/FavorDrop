import {User} from "./user";
import {Stop} from "./stop";

export class Order {
  private _user : User;
  stops : Stop[];
  time : string;

  constructor(user : User, time : string , stops : Stop[]) {
    this._user = user;
    this.stops = stops;
    this.time = time;
  }


  set user(value: User) {
    this._user = value;
  }

  getStops() {
    return this.stops;
  }
}
