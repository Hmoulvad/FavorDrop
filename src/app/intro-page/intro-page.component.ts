import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";
import {Response} from "@angular/http";
import {ServerService} from "../_services/server.service";

@Component({
  selector: 'fd-intro-page',
  templateUrl: './intro-page.component.html',
  styles: [require('../../styles.css').toString()]
})
export class IntroPageComponent implements OnInit {

  constructor(private serverService: ServerService) {
  }
  ngOnInit() {

  }
  ngAfterContentInit() {
     //this.onGet();
    }
    }
