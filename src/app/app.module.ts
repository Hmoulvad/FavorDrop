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
import { CreateUserComponent } from './user-login/create-user/create-user.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { routing} from "./app.routing";
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import {AuthService} from "./auth.service";
import {AngularFireModule} from "angularfire2";
import { OrderEditComponent } from './order-module/order-edit/order-edit.component';
import { OrderStartComponent } from './order-module/order-start.component';
import { OrderResultComponent } from './order-result/order-result.component';

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
    FaqPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    FooterComponent,
    OrderEditComponent,
    OrderStartComponent,
    OrderResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [OrderService, ShoppingListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
