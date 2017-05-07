import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
/*
  AuthGuard - Injectable service, som sørger for uautoriseret brugere ikke har adgang til beskyttet indhold.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('currentUser'))
      return true;
    this.router.navigate(['/user-login']), { queryParams: { returnUrl: state.url}};
      return false;
  }
}
