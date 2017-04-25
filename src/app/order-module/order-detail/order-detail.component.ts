import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Order} from "../order";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OrderService} from "../order.service";

@Component({
  selector: 'fd-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {

      }
}
