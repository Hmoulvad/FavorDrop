import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import Promise = firebase.Promise;

@Injectable()
export class AuthService {
  constructor(private  router: Router) {}

  getAuth() {
    return firebase.auth();
  }

  emailAuthentication(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(success) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        sessionStorage.setItem('currentUser',idToken);
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
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
      }.bind(this));

    }.bind(this));
  }

  googleAuthentication() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  isAuthenticated() {
    if (sessionStorage.getItem('currentUser') != null) {
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    firebase.auth().signOut();
  }
}

