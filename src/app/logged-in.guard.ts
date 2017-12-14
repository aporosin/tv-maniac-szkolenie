import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

/*
Verify and block url if user should not have access
Called in app.routing.ts in CanActivate
 */
@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor( private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = true;//prompt('Are you logged in?') === 'Yes';

    if(!isLoggedIn) {
      this.router.navigateByUrl('/logIn');
    }

    return isLoggedIn;
  }
}
