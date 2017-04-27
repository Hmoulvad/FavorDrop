import {Routes, RouterModule} from "@angular/router";
import {OrderModuleComponent} from "./order-module/order-module.component";
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {NgModule} from "@angular/core";
import {UserLoginComponent} from "./user-login/user-login.component";
import {ORDER_ROUTES} from "./order-module/order.routes";
import {CreateUserComponent} from "./user-login/create-intro/create-intro.component";

import {HelpPageComponent} from "./help-page/help-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {CreateUser2Component} from "./user-login/create-user2/create-user2.component";
import {AddressComponent} from "./profile-page/address/address.component";
import {AuthGuard} from "./_guards/auth.guard";
import {EditPasswordComponent} from "./profile-page/edit-password/edit-password.component";
import {BillingComponent} from "./billing/billing.component";

const APP_ROUTES: Routes = [
  //PathMatch sættes til full, for at sikre at der ikke henvises til Intro, hvis man skriver mellemrum først.
  { path: '', redirectTo: '/intro-page', pathMatch: 'full'},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'order-module', component: OrderModuleComponent},
  { path: 'intro-page', component: IntroPageComponent},
  { path: 'billing', component: BillingComponent },
  { path: 'help-page', component: HelpPageComponent},
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'create-intro', component: CreateUserComponent},
  { path: 'create-user2', component: CreateUser2Component},
  { path: 'edit-password', component: EditPasswordComponent},
  { path: 'address', component: AddressComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
})
export class AppModule {

}
export const routing = RouterModule.forRoot(APP_ROUTES);
