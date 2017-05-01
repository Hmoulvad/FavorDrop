import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../../stop";
import {OrderService} from "../../stop.service";

@Component({
  selector: 'fd-order-item',
  templateUrl: './order-history-item.component.html',
  styleUrls: ['./order-history-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() stop: Order;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
