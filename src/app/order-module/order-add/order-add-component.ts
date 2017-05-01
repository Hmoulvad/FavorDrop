import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {OrderService} from "../../_services/order.service";
import {ServerService} from "../../_services/server.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-order-add',
  templateUrl: './order-add-component.html',
  styleUrls: ['./order-add-component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private orderService: OrderService, private serverService: ServerService) { }

  onAddStop(form: NgForm) {
    const value = form.value;
    this.orderService.addStop(value.order,value.address,value.comment)
    form.reset();
  }

  ngOnInit() {
  }

}