import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{

  user = {
    name:'',
    lastname:'',
    email:'',
    password:'',
  }

  onSubmit(form: NgForm) {
    window.alert(this.user.name + "\n" + this.user.lastname);
  }

  constructor() { }


}
