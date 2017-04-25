import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {ServerService} from "./server.service";
@Injectable()
export class AuthService {
  name: string;
  token: string;
  mail: string;
  dbtest: any;




  signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    ).then(response => {
    this.signinUser(email,password);
  })
  }


  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.token = response.uid;
          console.log(this.token);
        }
      )
      .catch(
        error => console.log((error))
      );
  }
  isAuthenticated() {
    return this.token != null;
  }
  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  constructor(private router: Router) {
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

