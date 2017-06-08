import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../_services/order.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-stop-add',
  templateUrl: 'stop-add-component.html'
})
export class OrderAddComponent implements OnInit {

  constructor(private orderService: OrderService,) { }

  onAddStop(form: NgForm) {
    const value = form.value;
    this.orderService.addStop(value.order,value.address,value.comment);
    form.reset();
  }

  ngOnInit() {
  }

  getDBOrders() {
    this.orderService.GetOrdersFromDB();
  }

}
