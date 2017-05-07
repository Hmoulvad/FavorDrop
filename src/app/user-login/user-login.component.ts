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

  constructor(private authService: AuthService, private userservice: UserService) {}
  ngOnInit(){

  }

  emailLogin(form: NgForm) {
      this.authService.emailAuthentication(form.value.email, form.value.password)
      this.userservice.user.email = form.value.email;
      }

  facebookLogin() {
    this.authService.facebookAuthentication();
  }

  googleLogin() {
    this.authService.googleAuthentication();
  }
}
