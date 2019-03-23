import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  selectedRol: Rol;
  rols: Rol[];

  readonly URL_API = 'http://localhost:4000/rol/';

  constructor(private http: HttpClient ) { 
    this.selectedRol =new Rol();
  }

  getRol(){
    return this.http.get(this.URL_API);
  }

  postRol(Rol: Rol){
    return this.http.post(this.URL_API, Rol);
  }

}
