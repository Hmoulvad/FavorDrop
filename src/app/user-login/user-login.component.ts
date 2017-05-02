import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import Promise = firebase.Promise;
import * as firebase from "firebase";
import {UserService} from "../_services/user.service";
import {Response} from "@angular/http";
import {ServerService} from "../_services/server.service";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'fd-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit{
  dave: string;

  constructor(private authService: AuthService, private  rout: Router, private backend: UserService, private serverService: ServerService) {
    }
    ngOnInit(){
    }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  loginFb() {
    let provider = new firebase.auth.FacebookAuthProvider;
    provider.addScope("email");
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        localStorage.setItem('currentUser',idToken);
        this.onGet();
        this.backend.name= firebase.auth().currentUser.displayName;
        this.backend.email = firebase.auth().currentUser.providerData[0].email;
        this.rout.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        localStorage.setItem('currentUser',idToken);
        this.backend.name= firebase.auth().currentUser.displayName;
        this.backend.email = firebase.auth().currentUser.providerData[0].email;
        this.rout.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  onGet() {
    this.serverService.GetClientInfo()
      .subscribe();
  }
  test(){
      console.log(this.backend.user.email);
  }
}
