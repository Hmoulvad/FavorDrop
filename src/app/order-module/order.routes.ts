import {Routes} from "@angular/router";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

export const ORDER_ROUTES: Routes = [
  { path: ':id', component: OrderDetailComponent },
]
