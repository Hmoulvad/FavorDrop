import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: Http) {}

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
      })
    }, function (error) {
      console.log(error.message);
      localStorage.removeItem('currentUser');
    });
    this.router.navigate(['/']);
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

  //Testing through Firebase.DB
  dbcall(){
    var ref = firebase.database().ref("orders/completed");
    ref.once("value")
      .then(function(snapshot) {
        var key = snapshot.key;
        var childkey = snapshot.child("-KiFM0IhWsu3AKbYCFD6")
        return console.log(key + childkey);
      })

  }

}

