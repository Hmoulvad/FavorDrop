import {Routes, RouterModule} from "@angular/router";
import {CreateUserComponent} from "./_components/create-intro/create-intro.component";
import {HelpPageComponent} from "./_components/help-page/help-page.component";
import {IntroPageComponent} from "./_components/intro-page/intro-page.component";
import {UserLoginComponent} from "./_components/user-login/user-login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {OrderStatusComponent} from "./_components/order-status/order-status.component";
import {ProfilePageComponent} from "./_components/profile-page/profile-page.component";
import {NgModule} from "@angular/core";
import {OrderPageComponent} from "./_components/order-page/order-page.component";
import {StopDetailComponent} from "./_components/order-page/stop-detail/stop-detail.component";
import {OrderPaymentComponent} from "./_components/order-payment/order-payment.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'intro-page', pathMatch: 'full' },
  { path: 'create-intro', component: CreateUserComponent},
  { path: 'help-page', component: HelpPageComponent},
  { path: 'intro-page', component: IntroPageComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'order-page', component: OrderPageComponent, children: [
    { path:':id', component: StopDetailComponent} ] },
  { path: 'order-payment', component: OrderPaymentComponent, canActivate: [AuthGuard]},
  { path: 'order-status', component: OrderStatusComponent, canActivate: [AuthGuard]},
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'intro-page'} ];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
})
export class AppModule {

}
export const routing = RouterModule.forRoot(APP_ROUTES);
