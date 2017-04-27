import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {UserService} from "./_services/user.service";
import Promise = firebase.Promise;

@Injectable()
export class AuthService {



  constructor(private router: Router, private http: Http, private userService: UserService) {}

  signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    ).then(response => {
    this.signinUser(email,password);
  })
  }


  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(success) {
      firebase.auth().currentUser.getToken(true).then(function(idToken) {
      localStorage.setItem('currentUser',idToken);
      this.router.navigate(['/']);
      }.bind(this))
    }.bind(this), function (error) {
      console.log(error.message);
      localStorage.removeItem('currentUser');
    });
  }

  isAuthenticated() {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    }
    return false;
  }
  logout(){
    firebase.auth().signOut();
    localStorage.removeItem('currentUser');
  }

  getUserID(){
    return firebase.auth().currentUser.uid;
  }

}

