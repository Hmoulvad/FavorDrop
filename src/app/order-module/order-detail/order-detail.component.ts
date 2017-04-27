import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Order} from "../order";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {OrderService} from "../order.service";
import {isNumber} from "util";

@Component({
  selector: 'fd-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;
  id: number;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private rout: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.order = this.orderService.getOrderIndex(this.id);
        }
      );
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.id);
    this.rout.navigate(['../'],{relativeTo: this.route})
  }
}
