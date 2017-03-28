import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/angularfire2";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements CanActivate {
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
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token)
        }
      )
      .catch(
        error => console.log((error))
      );

  }
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    return firebase.auth().currentUser.getToken();
  }


  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
        (!authenticated) this.router.navigate(['/login']);
      })
  }
}

