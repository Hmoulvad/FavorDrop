import {Routes, RouterModule} from "@angular/router";
import {OrderModuleComponent} from "./order-module/order-module.component";
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {NgModule} from "@angular/core";
import {UserLoginComponent} from "./user-login/user-login.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {ORDER_ROUTES} from "./order-module/order.routes";

const APP_ROUTES: Routes = [
  //PathMatch sættes til full, for at sikre at der ikke henvises til Intro, hvis man skriver mellemrum først.
  { path: '', redirectTo: '/intro-page', pathMatch: 'full'},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'order-module', component: OrderModuleComponent, children: ORDER_ROUTES },
  { path: 'intro-page', component: IntroPageComponent},
  { path: 'about-page', component: AboutPageComponent},
  { path: 'faq-page', component: FaqPageComponent},
  { path: 'contact-page', component: ContactPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],

})
export class AppModule { }

export const routing = RouterModule.forRoot(APP_ROUTES);
