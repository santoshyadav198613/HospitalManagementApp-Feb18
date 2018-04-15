import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot,
   Router , CanActivateChild, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../login/service/login.service';

@Injectable()
export class AuthGuard implements CanActivate ,CanActivateChild , CanLoad {

  constructor(private loginService: LoginService,
  private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.loginService.isLoggedIn) {
        this.router.navigate(['login']);
    } 

    return this.loginService.isLoggedIn;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.loginService.isAdmin; 
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.loginService.isLoggedIn) {
      this.router.navigate(['login']);
  } 

  return this.loginService.isLoggedIn;
  
  }
}
