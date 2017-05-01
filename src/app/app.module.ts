import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderModuleComponent } from './order-module/order-module.component';
import { OrderListComponent } from './order-module/order-list/order-list.component';
import { OrderItemComponent } from './order-module/order-list/order-item/order-item.component';
import { OrderDetailComponent } from './order-module/order-detail/order-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { OrderService} from "./order-module/order.service";
import { CreateUserComponent } from './user-login/create-intro/create-intro.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { routing} from "./app.routing";
import {AuthService} from "./auth.service";
import {AngularFireModule} from "angularfire2";
import { OrderStartComponent } from './order-module/order-start.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CreateUser2Component } from './user-login/create-user2/create-user2.component';
import { EditPasswordComponent } from './profile-page/edit-password/edit-password.component';
import { AddressComponent } from './profile-page/address/address.component';
import { OrderHistoryComponent } from './profile-page/order-history/order-history.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService} from "./_services/user.service";
import {ServerService} from "./_services/server.service";
import { BillingComponent } from './billing/billing.component';
import {OrderAddComponent} from "./order-module/order-add/order-add-component";
import { HelpItemComponent } from './help-page/help-item/help-item.component';


export const firebaseConfig = {
  apiKey: "AIzaSyAYoXaVqer-feXLG-zIN0avkvbxDVYtzq4",
  authDomain: "favordrop.firebaseapp.com",
  databaseURL: "https://favordrop.firebaseio.com",
  storageBucket: "favordrop.appspot.com",
  messagingSenderId: "1070909821847"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderModuleComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderDetailComponent,
    OrderAddComponent,
    DropdownDirective,
    CreateUserComponent,
    IntroPageComponent,
    UserLoginComponent,
    OrderStartComponent,
    HelpPageComponent,
    ProfilePageComponent,
    CreateUser2Component,
    EditPasswordComponent,
    AddressComponent,
    OrderHistoryComponent,
    BillingComponent,
    HelpItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [AuthService, ServerService, OrderService,
    AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
