import {Component, OnInit, Input} from '@angular/core';
import {HelpItem} from "./help-item";

@Component({
  selector: 'fd-help-item',
  templateUrl: './help-item.component.html',
  styles: [require('../../../styles.css').toString()]
})
export class HelpItemComponent implements OnInit {
  @Input() shown = true;
  @Input() helpTitle;
  isExpanded: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleItemContent() {
    this.isExpanded = !this.isExpanded;
    ////href="#collapseTwo"

  }


}
