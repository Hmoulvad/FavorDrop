import {Routes} from "@angular/router";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

export const ORDER_ROUTES: Routes = [
<<<<<<< HEAD
  { path: ':id', component: OrderDetailComponent },
]
=======
  { path: '', component: OrderStartComponent },
  { path: ':id', component: OrderDetailComponent }
];
>>>>>>> master
