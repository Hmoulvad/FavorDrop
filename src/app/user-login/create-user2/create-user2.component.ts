import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'fd-create-user2',
  templateUrl: './create-user2.component.html',
  styleUrls: ['./create-user2.component.css']
})
export class CreateUser2Component implements OnInit {
  mail = this.authService.Usermail();
  constructor(private authService: AuthService) {
  }
    ngOnInit() {
  }
}
