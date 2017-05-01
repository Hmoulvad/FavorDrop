import {Component, OnInit, Input} from '@angular/core';
import {Stop} from "../../../_models/stop";

@Component({
  selector: 'fd-order-history-item',
  templateUrl: './order-history-item.component.html',
  styleUrls: ['./order-history-item.component.css']
})
export class OrderHistoryItemComponent implements OnInit {

  @Input() stop: Stop;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
