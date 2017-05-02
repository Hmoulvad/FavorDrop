import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Stop} from "../../_models/stop";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {OrderService} from "../../_services/order.service";

@Component({
  selector: 'fd-order-detail',
  templateUrl: './order-detail.component.html',
  styles: [require('../../../styles.css').toString()]
})
export class OrderDetailComponent implements OnInit {
  @Input() stop: Stop;
  id: number;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private rout: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.stop = this.orderService.getStopIndex(this.id);
        }
      );
  }

  deleteStop() {
    this.orderService.deleteStop(this.id);
    this.rout.navigate(['../'],{relativeTo: this.route})
  }
}
