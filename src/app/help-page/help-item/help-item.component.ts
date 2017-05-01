import {Component, OnInit, Input} from '@angular/core';
import {HelpItem} from "./help-item";

@Component({
  selector: 'fd-help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.css']
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
