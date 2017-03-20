import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../order";

@Component({
  selector: 'fd-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() selectedOrder: Order;

  constructor() { }

  ngOnInit() {
  }

}
