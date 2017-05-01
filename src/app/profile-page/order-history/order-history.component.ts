import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../server.service";

@Component({
  selector: 'fd-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private serverService : ServerService , ) { }

  ngOnInit() {
  }



}
