import {Component, OnInit, Input} from '@angular/core';
import {Stop} from "../../../_models/stop";
import {Order} from "../../../_models/order";

@Component({
  selector: 'fd-order-history-item',
  templateUrl: './order-history-item.component.html',
  styles: [require('../../../../styles.css').toString()]
})
export class OrderHistoryItemComponent implements OnInit {

  @Input() order: Order;
  private price : number;
  private time : string;
  stops : Stop[];

  constructor() {
  }

  ngOnInit() {
    this.stops = this.order.stops;
    this.price = this.order.stops.length * 80;
    this.time = this.order.time;
  }

}
