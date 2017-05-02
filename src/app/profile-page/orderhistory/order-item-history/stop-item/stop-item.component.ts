import {Component, Input, OnInit} from '@angular/core';
import {Stop} from "../../../../_models/stop";

@Component({
  selector: 'fd-stop-item',
  templateUrl: './stop-item.component.html',
  styles: [require('../../../../../styles.css').toString()]
})
export class StopItemComponent implements OnInit {

  @Input() stop : Stop;

  constructor() { }

  ngOnInit() {
  }

}
