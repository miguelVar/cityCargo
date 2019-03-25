import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ETransporte } from '../models/e-transporte';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ETransporteService {


  selectedElement:ETransporte;
  servicios:Servicio[];
  elementos:ETransporte[];

  readonly URL_API='http://localhost:3000/api/transportElement';

  constructor(private http:HttpClient) { 
    this.selectedElement=new ETransporte();

  }

  getElementos(){
    return this.http.get(this.URL_API);
  }

  postElement(elemento:ETransporte){
    console.log('se fue', elemento);
    return this.http.post(this.URL_API,elemento);
  }
}
