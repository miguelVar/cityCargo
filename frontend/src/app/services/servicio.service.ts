import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';
import { Clients } from '../models/clients';
import { Vehiculo } from '../models/vehiculo';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  selectedServiceCityCargo:Servicio;
  services:Servicio[];
  clientes:Clients[];
  vehiculos:Vehiculo[];
  ordenes:Orden[];
  servicesDeleted:Servicio[];
  servicesFinalizados:Servicio[];
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
  getOrdenes(){
    return this.http.get(this.URL_API+`/orden`);
  }
  getServicesDeletedLogi(){
    return this.http.get(this.URL_API+`/servicesdeletedlogic`);
  }

  getServicesFinalizados(){
    return this.http.get(this.URL_API+`/servicesfinalizados`);
  }
  putServicio(servicio:Servicio){
    return this.http.put(this.URL_API+`/${servicio.idServicio}`,servicio);
  }
  putDeletedLogicService(servicio:Servicio){
    return this.http.put(this.URL_API+"/deletelogic"+`/${servicio.idServicio}`, servicio);

  }
  finalizarServicio(servicio:Servicio){
    return this.http.put(this.URL_API+"/finalizar"+`/${servicio.idServicio}`, servicio);
  }
  actulizarEstadoOrden(service:Servicio){
    return this.http.put(this.URL_API+`/actorden`,service);
  }

  postService(service:Servicio){
    return this.http.post(this.URL_API,service);

  }
  
  
}
