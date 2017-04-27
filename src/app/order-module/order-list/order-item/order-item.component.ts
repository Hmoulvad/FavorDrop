import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../../order";
import {OrderService} from "../../order.service";

@Component({
  selector: 'fd-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log("clicked on onSelected")
    this.orderService.orderSelected.emit(this.order);
  }

}
