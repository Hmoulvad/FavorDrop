import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "../../_services/order.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-order-add',
  templateUrl: './order-add-component.html',
  styles: [require('../../../styles.css').toString()]
})
export class OrderAddComponent implements OnInit {

  constructor(private orderService: OrderService,) { }

  onAddStop(form: NgForm) {
    const value = form.value;
    this.orderService.addStop(value.order,value.address,value.comment)
    form.reset();
  }

  ngOnInit() {
  }

}
