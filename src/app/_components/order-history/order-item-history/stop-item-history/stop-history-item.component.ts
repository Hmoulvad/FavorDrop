import {Component, Input, OnInit} from '@angular/core';
import {Stop} from "../../../../_models/stop";

@Component({
  selector: 'fd-stop-history-item',
  templateUrl: './stop-history-item.component.html'
})
export class StopHistoryItemComponent implements OnInit {

  @Input() stop : Stop;

  constructor() { }

  ngOnInit() {
  }

}
