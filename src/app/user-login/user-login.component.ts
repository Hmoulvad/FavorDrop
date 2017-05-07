import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styles: [require('../../styles.css').toString()]
})
export class UserLoginComponent implements OnInit{
    loginInvalid : boolean;
    emailform: string;
    passwordform: string;

    error = '';

  constructor(private authService: AuthService) {}
  ngOnInit(){


  }
  emailLogin() {
    this.authService.emailAuthentication(this.emailform, this.passwordform);
    if (this.authService.error = true) {
      this.errormessage();
    }
  }


  facebookLogin() {
    this.authService.facebookAuthentication();
  }

  googleLogin() {
    this.authService.googleAuthentication();
  }
  errormessage() {
    this.error = 'Wrong Email or Password';
  }
}
