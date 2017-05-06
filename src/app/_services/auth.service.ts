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
    firebase.auth().signInWithEmailAndPassword(email,password).then((success) => {
      firebase.auth().currentUser.getToken(true).then((idToken) => {
        this.userService.user.UID = firebase.auth().currentUser.uid;
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
        this.loadUser();
      });
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
    firebase.auth().signInWithPopup(provider).then((success) => {
      firebase.auth().currentUser.getToken(true).then((idToken) => {
        this.userService.user.UID = firebase.auth().currentUser.uid;
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
        this.loadUser();
      });
    });
  }

  googleAuthentication() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then((result) => {
      firebase.auth().currentUser.getToken(true).then((idToken) => {
        this.userService.user.UID = firebase.auth().currentUser.uid;
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
        this.loadUser()
      });
    });
  }

  isAuthenticated() {
    if (sessionStorage.getItem('currentUser'))
      return true;
    return false;
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    firebase.auth().signOut();
    console.log("tjekker")
  }

  private loadUser() {
      this.userService.getClient().subscribe(
        user => {
          console.log(JSON.stringify(user));
          if (!user) {
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
