import {User} from "./user";
import {Stop} from "./stop";

export class Order {
  user : User;
  stops : Stop[];

  constructor(user : User, stops : Stop[]) {
    this.user = user;
    this.stops = stops;
  }

}
