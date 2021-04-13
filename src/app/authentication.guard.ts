import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  /*canActivate() : boolean{
    return true;
  }*/
  constructor(private Authguardservice: AuthguardServiceService, private router:Router) {}  
  canActivate(): boolean {  
      if (!this.Authguardservice.gettoken()) {  
          this.router.navigateByUrl("/login");  
      }  
      return this.Authguardservice.gettoken();  
  }  
}
