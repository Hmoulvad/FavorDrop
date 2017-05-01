import { Component, OnInit } from '@angular/core';
import {Stop} from "../_models/stop";
import {OrderService} from "../_services/order.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'fd-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  stops: Stop[] = [];

  username: string = 'Hannibal B. Moulvad';
  email: string = 'Hmoulvad@hotmail.com';
  address: string = 'Rantzausgade 28B';
  zipcode: string = '2200' ;
  city: string = 'København N';


  constructor(private orderService: OrderService, private userService: UserService ) { }

  ngOnInit() {
    this.stops = this.orderService.getStops();
  }

}
