import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit{
    emailform: string;
    passwordform: string;

  constructor(private authService: AuthService) {}
  ngOnInit(){

  }
  emailLogin() {
    this.authService.emailAuthentication(this.emailform, this.passwordform);

  }

  facebookLogin() {
    this.authService.facebookAuthentication();
  }

  googleLogin() {
    this.authService.googleAuthentication();
  }
}
