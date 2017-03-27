import {Routes} from "@angular/router";
import {OrderStartComponent} from "./order-start.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderEditComponent} from "./order-edit/order-edit.component";

export const ORDER_ROUTES: Routes = [
  { path: '', component: OrderStartComponent },
  { path: 'new', component: OrderEditComponent},
  { path: ':id', component: OrderDetailComponent },
  { path: ':id/edit', component: OrderEditComponent }
]
