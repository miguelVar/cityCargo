import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  selectedServiceCityCargo:Servicio;
  services:Servicio[];
  clientes:Clients[];
  readonly URL_API='http://localhost:3000/api/servicecitycargo';
  

  constructor(private http:HttpClient) { 
    this.selectedServiceCityCargo=new Servicio();
  }


  getServices(idCliente:string){
    return this.http.get(this.URL_API+`/${idCliente}`);
  }
  getServicesLink(){
    return this.http.get(this.URL_API+`/link`);
  }
  getVehiculos(){
    return this.http.get(this.URL_API+`/vehiculos`);
  }

  postService(service:Servicio){
    return this.http.post(this.URL_API,service);

  }
  
  
}
