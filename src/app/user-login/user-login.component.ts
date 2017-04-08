import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {AuthProviders, AuthMethods, AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit{
  error : any;


  constructor(private authService: AuthService, private  rout: Router, private af: AngularFire) {
    }
    ngOnInit(){
    }
  ifauth(){

  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser(email, password);
    if (this.authService.isAuthenticated()) {
      this.rout.navigate(['/'])
    }
    else {
      console.log("john, du har tastet forkert")
    }
  }
  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.rout.navigate(['/']);
        this.authService.token = "facebook";
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.rout.navigate(['/']);
        this.authService.token = "google";
      }).catch(
      (err) => {
        this.error = err;
      })
  }
}
