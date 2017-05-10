import {Stop} from "./stop";
/*
  Order objekt, som indeholder tidspunkt (som string), array af stops og en pris.
 */
export class Order {
  time : string;
  stops : Stop[];
  price : number;
  clientname : string;

  constructor(time : string, price: number , stops : Stop[], clientname : string) {
    this.time = time;
    this.stops = stops;
    this.price = price;
    this.clientname = clientname;
  }
}
