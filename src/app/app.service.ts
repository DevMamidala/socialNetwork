import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService  implements CanActivate {
  public url= 'http://localhost:3000/';
  private _handleEmitterData$ = new Subject<any>();
  public handleEmitterData$ = this._handleEmitterData$.asObservable();
  constructor(private _https: HttpClient, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (localStorage.getItem('userData')) {
        // logged in so return true
        return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/', 'login'])
    return false;
    }

  userLoggedIn(){
    this._handleEmitterData$.next('loggedIn');
  }

  postData(data: any): any{
   return this._https.post(this.url+ 'api/signup', data);
  }
  postLoginData(logindata: any): any{
    return this._https.post(this.url+ 'api/login', logindata);
  }
  postForgotPassword(forgotPwData: any): any{
    return this._https.post(this.url+ 'api/forgotpassword', forgotPwData);
  }
  postChangePassword(changePwData: any): any{
    return this._https.post(this.url+ '/api/changePassword', changePwData);
  }
  
}
