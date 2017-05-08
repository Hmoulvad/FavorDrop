import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { OrderPageComponent } from './_components/order-page/order-page.component';
import { StopListComponent } from './_components/order-page/stop-list/stop-list.component';
import { StopItemComponent } from './_components/order-page/stop-list/stop-item/stop-item.component';
import { StopDetailComponent } from './_components/order-page/stop-detail/stop-detail.component';
import { OrderService } from "./_services/order.service";
import { CreateUserComponent } from './_components/create-intro/create-intro.component';
import { IntroPageComponent } from './_components/intro-page/intro-page.component';
import { UserLoginComponent } from './_components/user-login/user-login.component';
import { routing } from "./app.routing";
import { AuthService } from "./_services/auth.service";
import { AngularFireModule } from "angularfire2";
import { HelpPageComponent } from './_components/help-page/help-page.component';
import { ProfilePageComponent } from './_components/profile-page/profile-page.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from "./_services/user.service";
import { OrderPaymentComponent } from './_components/order-payment/order-payment.component';
import { OrderAddComponent} from "./_components/order-page/stop-add/stop-add-component";
import { HelpItemComponent } from './_components/help-page/help-item/help-item.component';
import { OrderHistoryItemComponent } from "./_components/order-history/order-item-history/order-history-item.component";
import { OrderHistoryComponent } from "./_components/order-history/order-history.component";
import { StopHistoryItemComponent } from "./_components/order-history/order-item-history/stop-item-history/stop-history-item.component";
import { AgmCoreModule } from "angular2-google-maps/core";
import { OrderStatusComponent } from './_components/order-status/order-status.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAYoXaVqer-feXLG-zIN0avkvbxDVYtzq4",
  authDomain: "favordrop.firebaseapp.com",
  databaseURL: "https://favordrop.firebaseio.com",
  storageBucket: "favordrop.appspot.com",
  messagingSenderId: "1070909821847"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderPageComponent,
    StopListComponent,
    StopDetailComponent,
    OrderHistoryComponent,
    StopHistoryItemComponent,
    OrderHistoryItemComponent,
    OrderAddComponent,
    CreateUserComponent,
    IntroPageComponent,
    UserLoginComponent,
    HelpPageComponent,
    ProfilePageComponent,
    OrderPaymentComponent,
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
