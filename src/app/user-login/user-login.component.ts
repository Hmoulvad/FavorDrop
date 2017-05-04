import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {isUndefined} from "util";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styles: [require('../../styles.css').toString()]
})
export class UserLoginComponent implements OnInit{

    loginInvalid : boolean;

  constructor(private authService: AuthService) {
    }
    ngOnInit(){
    }

  emailLogin(form: NgForm) {
    this.authService.emailAuthentication(form.value.email, form.value.password)
    if (localStorage.getItem('currentUser') == null) {
       this.loginInvalid = true;
    }
  }

  facebookLogin() {
    this.authService.facebookAuthentication();
  }

  googleLogin() {
    this.authService.googleAuthentication();
  }
}
