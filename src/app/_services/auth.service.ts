import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import Promise = firebase.Promise;
import {UserService} from "./user.service";
import {User} from "../_models/user";

@Injectable()
export class AuthService {
  constructor(private  router: Router,private userService: UserService) {}

  emailAuthentication(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(success) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
      }.bind(this))
    }.bind(this), function (error) {
      console.log(error.message);
      sessionStorage.removeItem('currentUser');
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
        this.loadUser();
        this.router.navigate(['/']);
      }.bind(this));

    }.bind(this));
  }

  googleAuthentication() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
        sessionStorage.setItem('currentUser',idToken);
        this.loadUser();
        this.router.navigate(['/']);
      }.bind(this));
    }.bind(this));
  }

  isAuthenticated() {
    if (sessionStorage.getItem('currentUser'))
      return true;
    return false;
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    firebase.auth().signOut();
  }

  private loadUser() {
    this.userService.getClient().subscribe(
      user => {
        console.log(JSON.stringify(user));
        if (user) {
          this.userService.user = user;
        }
        else {
          console.log("No profile in database. Loading information from authentication provider.");
          this.userService.user = new User();
          this.userService.user.UID = firebase.auth().currentUser.uid;
          if (firebase.auth().currentUser.providerData[0].email)
            this.userService.user.email = firebase.auth().currentUser.providerData[0].email;
          else
            this.userService.user.email = firebase.auth().currentUser.email;
          if (firebase.auth().currentUser.providerData[0].displayName)
            this.userService.user.name = firebase.auth().currentUser.providerData[0].displayName;
        }
      }
    )
  }
}
