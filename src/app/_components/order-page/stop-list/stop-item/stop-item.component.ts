import {Component, OnInit, Input} from '@angular/core';
import {Stop} from "../../../../_models/stop";

@Component({
  selector: 'fd-stop-item',
  templateUrl: 'stop-item.component.html'
})
export class StopItemComponent implements OnInit {

  @Input() stop: Stop;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
