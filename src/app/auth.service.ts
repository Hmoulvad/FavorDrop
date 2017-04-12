import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  name: string;
  token: string;

  signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    )
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

}

