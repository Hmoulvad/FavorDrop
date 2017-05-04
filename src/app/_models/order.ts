import {User} from "./user";
import {Stop} from "./stop";

export class Order {
  user : User;
  time : string;
  stops : Stop[];

  constructor(user : User, time : string , stops : Stop[]) {
    this.user = user;
    this.time = time;
    this.stops = stops;
  }

  getStops() {
    return this.stops;
  }
}
