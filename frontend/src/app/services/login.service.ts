import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { rol } from '../models/rol'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL_API = 'http://localhost:3000/usuario';
  helper = new JwtHelperService();
  Rol:rol;

  constructor(private http : HttpClient) { }

  getUsuarios(){
    return this.http.get(this.URL_API);
  }

  logout(){
    return this.http.get(this.URL_API + '/logout');
  }

  authentication(usuario : login){
    return this.http.post(this.URL_API + '/login', usuario);
  }

  validarAdmin(id : string){
    return this.http.get(this.URL_API + '/soyAdmin' + `/${id}`);
  }

  public isAuthenticated() : boolean {
    const token = localStorage.getItem('usuario');
    return !this.helper.isTokenExpired(token);
  }

}
