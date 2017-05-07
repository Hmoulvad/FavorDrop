import {Routes, RouterModule} from "@angular/router";
import {OrderModuleComponent} from "./order-module/stop-module.component";
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {NgModule} from "@angular/core";
import {UserLoginComponent} from "./user-login/user-login.component";
import {CreateUserComponent} from "./user-login/create-intro/create-intro.component";

import {HelpPageComponent} from "./help-page/help-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {AuthGuard} from "./_guards/auth.guard";
import {BillingComponent} from "./billing/payment.component";
import {OrderDetailComponent} from "./order-module/stop-detail/stop-detail.component";
import {OrderStatusComponent} from "./billing/billing/billing.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'intro-page', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent},
  { path: 'order-module', component: OrderModuleComponent, children: [
    { path:':id', component: OrderDetailComponent}
    ] },
  { path: 'intro-page', component: IntroPageComponent},
  { path: 'help-page', component: HelpPageComponent},
  { path: 'create-intro', component: CreateUserComponent},
  { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: OrderStatusComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'intro-page'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
})
export class AppModule {

}
export const routing = RouterModule.forRoot(APP_ROUTES);
