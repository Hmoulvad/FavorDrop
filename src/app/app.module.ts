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
import { OrderService } from "./_services/order.service";
import { CreateUserComponent } from './user-login/create-intro/create-intro.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { routing } from "./app.routing";
import { AuthService } from "./_services/auth.service";
import { AngularFireModule } from "angularfire2";
import { HelpPageComponent } from './help-page/help-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from "./_services/user.service";
import { BillingComponent } from './billing/billing.component';
import { OrderAddComponent} from "./order-module/order-add/order-add-component";
import { HelpItemComponent } from './help-page/help-item/help-item.component';
import { OrderHistoryItemComponent } from "./profile-page/orderhistory/order-item-history/order-history-item.component";
import { OrderHistoryComponent } from "./profile-page/orderhistory/order-history.component";
import { StopItemComponent } from './profile-page/orderhistory/order-item-history/stop-item/stop-item.component';
import {AgmCoreModule} from "angular2-google-maps/core";
import { OrderStatusComponent } from './billing/order-status/order-status.component';


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
    OrderHistoryComponent,
    OrderHistoryItemComponent,
    OrderAddComponent,
    CreateUserComponent,
    IntroPageComponent,
    UserLoginComponent,
    HelpPageComponent,
    ProfilePageComponent,
    BillingComponent,
    HelpItemComponent,
    StopItemComponent,
    OrderStatusComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoy6D6WrByFtvwa6KwOxx5MZ8fPIAxNkY'
    })
  ],
  providers: [UserService, OrderService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
