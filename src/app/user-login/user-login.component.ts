import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {moveIn} from "../router.animations";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {Router} from "@angular/router";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
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

  error : any;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members')
      }
    });
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
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
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }


}
