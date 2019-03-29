import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor( public auth: LoginService, public router: Router ) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true; 
  }

  soyGerente() : boolean{
    const token = localStorage.getItem('usuario');
    const tokenPayload = decode(token);
    if( !this.auth.isAuthenticated() || tokenPayload.id_usuario){
      return false;
    }
    return true;
  }
}
