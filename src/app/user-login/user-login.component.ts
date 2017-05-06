import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styles: [require('../../styles.css').toString()]
})
export class UserLoginComponent implements OnInit{

    loginInvalid : boolean;

  constructor(private authService: AuthService) {}
  ngOnInit(){}


  emailLogin(form: NgForm) {
    try {
      this.authService.emailAuthentication(form.value.email, form.value.password)
    }
    catch (e){
      if(e instanceof RangeError) {
        console.log('Error fætter')
      }
    }


  }

  facebookLogin() {
    this.authService.facebookAuthentication();
  }

  googleLogin() {
    this.authService.googleAuthentication();
  }
}
