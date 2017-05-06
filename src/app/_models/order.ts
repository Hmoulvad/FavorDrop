import {Stop} from "./stop";

export class Order {
  time : string;
  stops : Stop[];

  constructor(time : string , stops : Stop[]) {
    this.time = time;
    this.stops = stops;
  }

  getStops() {
    return this.stops;
  }
}
