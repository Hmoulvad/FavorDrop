import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../../order";

@Component({
  selector: 'fd-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;
  orderId;

  constructor() { }

  ngOnInit() {
  }

}
