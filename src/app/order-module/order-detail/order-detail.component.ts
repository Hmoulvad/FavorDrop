import {Component, OnInit, OnDestroy} from '@angular/core';
import {Order} from "../order";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OrderService} from "../order.service";

@Component({
  selector: 'fd-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  private subscribtion: Subscription;
  private orderIndex: number;
  selectedOrder: Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.subscribtion = this.route.params.subscribe(
      (params:any) => {
        this.orderIndex = params['id'];
        this.selectedOrder = this.orderService.getOrderIndex(this.orderIndex);
      }
    );
  }

  onEdit() {
      this.router.navigate(['/order-module', this.orderIndex, 'edit']);
  }

  onDelete() {
    this.orderService.deleteOrder(this.selectedOrder);
    this.router.navigate(['/order-module']);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }





}
