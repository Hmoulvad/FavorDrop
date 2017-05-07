import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import Promise = firebase.Promise;
import {UserService} from "./user.service";
import {User} from "../_models/user";
import {OrderService} from "./order.service";
/*
  AuthService - Injectable service som har ansvar for authentication, tokens, samt hentning af brugerdata.
 */
@Injectable()
export class AuthService {
  constructor(private  router: Router,private userService: UserService, private orderService: OrderService) {}
error: boolean;
  /*
    Email authentication tager imod email og password.
    1. Validere login med firebase.
    2. Hvis det er successfuldt hentes en token samt brugerdata, som gemmes i User objektet.
    3. Navigering tilbage til forsiden.
   */
  emailAuthentication(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password).then((success) => {
        firebase.auth().currentUser.getToken(true).then((idToken) => {
          console.log("Email authentication success!");
          this.error = false;
          this.userService.user.UID = firebase.auth().currentUser.uid;
          sessionStorage.setItem('currentUser', idToken);
          this.router.navigate(['/']);
          this.loadUser();
        });
      },(error) => {
      if(error) console.log("Email authentication failed: " + error.message);
      this.error = true;
      }
    );
  }

  /*
   Email brugeroprettelse.
   1. Opretter new bruger i Firebase.
   2. Hvis det er successfuldt, startes email authentication metoden.
   */
  emailSignup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      console.log("Email signup success!");
      this.emailAuthentication(email,password);
    }, (error) => {
      if(error) console.log("Email signup failed: " + error.message);
      })
  }

  /*
  Facebook authentication.
  1. Definering af provider, og tilføjer email som ønskede data.
  2. Sign in igennem Firebase.
  3. Hvis det er successfuldt hentes en token og brugerdata, som gemmes i User objektet.
  4. Navigering tilbage til forsiden.
   */
  facebookAuthentication() {
    let provider = new firebase.auth.FacebookAuthProvider;
    provider.addScope("email");
    firebase.auth().signInWithPopup(provider).then((success) => {
      firebase.auth().currentUser.getToken(true).then((idToken) => {
        console.log("Facebook authentication success!");
        this.userService.user.UID = firebase.auth().currentUser.uid;
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
        this.loadUser();
      });
    }, (error) => {
      if(error) console.log("Facebook authentication failed: " + error.message);
      });
  }

  /*
   Google authentication.
   1. Definering af provider.
   2. Sign in igennem Firebase.
   3. Hvis det er successfuldt hentes en token og brugerdata, som gemmes i User objektet.
   4. Navigering tilbage til forsiden.
   */
  googleAuthentication() {
    let provider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(provider).then((result) => {
      firebase.auth().currentUser.getToken(true).then((idToken) => {
        console.log("Google authentication success!");
        this.userService.user.UID = firebase.auth().currentUser.uid;
        sessionStorage.setItem('currentUser',idToken);
        this.router.navigate(['/']);
        this.loadUser()
      });
    }, (error) => {
      if(error) console.log("Google authentication failed: " + error.message);
    });
  }

  /*
  Check til om brugeren er authentikeret, sker ved at checke efter i session storage.
   */
  isAuthenticated() {
    if (sessionStorage.getItem('currentUser'))
      return true;
    return false;
  }

  /*
  Log ud metode.
  1. Fjern token fra session storage.
  2. Logger ud til Firebase.
   */
  logout(){
    sessionStorage.removeItem('currentUser');
    firebase.auth().signOut();
  }

  /*
  Load User metode, som starter backend kald gennem UserService.
  1. Subscriber på HTTP kaldet til backend.
  2. Hvis brugeren ikke eksistere i databasen, hentes data fra provider.
  * Mangler * 3. Forsøger at hente brugeren ordrehistorik til profil siden.

  ** Skal deles op så alt efter hvilken authentication metode, man benytter, forsøger den kun at hente den rigtige data.
  ** Ordrehistorik skal itereres igennem, og pushes til ordrehistorik objektet.
   */
  private loadUser() {
      this.userService.getClient().subscribe(
        user => {
          console.log("User data loading...");
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
      );
  }
}
