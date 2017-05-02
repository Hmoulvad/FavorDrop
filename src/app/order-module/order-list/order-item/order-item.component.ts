import {Component, OnInit, Input} from '@angular/core';
import {Stop} from "../../../_models/stop";

@Component({
  selector: 'fd-order-item',
  templateUrl: './order-item.component.html',
  styles: [require('../../../../styles.css').toString()]
})
export class OrderItemComponent implements OnInit {

  @Input() stop: Stop;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
