import {Routes} from "@angular/router";
import {OrderStartComponent} from "./order-start.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

export const ORDER_ROUTES: Routes = [
  { path: '', component: OrderStartComponent },
  { path: ':id', component: OrderDetailComponent },
]
