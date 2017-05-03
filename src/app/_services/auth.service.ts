import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import Promise = firebase.Promise;
import {UserService} from "./user.service";

@Injectable()
export class AuthService {
  constructor(private  router: Router, private userService: UserService) {}

  emailAuthentication(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(success) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        localStorage.setItem('currentUser',idToken);
        this.userService.user.UID = firebase.auth().currentUser.uid;
        this.router.navigate(['/']);
      }.bind(this))
    }.bind(this), function (error) {
      console.log(error.message);
      localStorage.removeItem('currentUser');
    });
  }

  emailSignup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      ).then(response => {
      this.emailAuthentication(email,password);
    })
  }

  facebookAuthentication() {
    let provider = new firebase.auth.FacebookAuthProvider;
    provider.addScope("email");
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        localStorage.setItem('currentUser',idToken);
        this.userService.user.UID = firebase.auth().currentUser.uid;
        this.userService.user.name= firebase.auth().currentUser.displayName;
        this.userService.user.email = firebase.auth().currentUser.providerData[0].email;
        this.router.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  googleAuthentication() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        localStorage.setItem('currentUser',idToken);
        this.userService.user.UID = firebase.auth().currentUser.uid;
        this.userService.user.name= firebase.auth().currentUser.displayName;
        this.userService.user.email = firebase.auth().currentUser.providerData[0].email;
        this.router.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  isAuthenticated() {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser');
    firebase.auth().signOut();
  }

  getUserID(){
    return firebase.auth().currentUser.uid;
  }

}

