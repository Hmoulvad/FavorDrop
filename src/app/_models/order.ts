import {Stop} from "./stop";
export class Order {
  time : string;
  stops : Stop[];
  price : number;

  constructor(time : string, price: number , stops : Stop[]) {
    this.time = time;
    this.stops = stops;
    this.price = price;
  }

  getStops() {
    return this.stops;
  }
}
