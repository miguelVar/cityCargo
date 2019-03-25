import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  selectedServiceCityCargo:Servicio;
  services:Servicio[];
  readonly URL_API='http://localhost:3000/api/servicecitycargo';
  

  constructor(private http:HttpClient) { 
    this.selectedServiceCityCargo=new Servicio();
  }


  getServices(){
    return this.http.get(this.URL_API);
  }
  
  
}
