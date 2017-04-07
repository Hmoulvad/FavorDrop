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
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { OrderService} from "./order-module/order.service";
import { ShoppingListService} from "./shopping-list/shopping-list.service";
import { PriceestimateComponent } from './order-module/priceestimate/priceestimate.component';
import { CreateUserComponent } from './user-login/create-intro/create-intro.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { routing} from "./app.routing";
import { FooterComponent } from './footer/footer.component';
import {AuthService} from "./auth.service";
import {AngularFireModule} from "angularfire2";
import { OrderEditComponent } from './order-module/order-edit/order-edit.component';
import { OrderStartComponent } from './order-module/order-start.component';
import { OrderResultComponent } from './order-result/order-result.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CreateUser2Component } from './user-login/create-user2/create-user2.component';
import {ServerService} from "./server.service";
import { EditPasswordComponent } from './profile-page/edit-password/edit-password.component';

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
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    PriceestimateComponent,
    CreateUserComponent,
    IntroPageComponent,
    UserLoginComponent,
    FooterComponent,
    OrderEditComponent,
    OrderStartComponent,
    OrderResultComponent,
    HelpPageComponent,
    ProfilePageComponent,
    CreateUser2Component,
    EditPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [OrderService, ShoppingListService, AuthService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
