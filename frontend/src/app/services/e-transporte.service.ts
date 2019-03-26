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
  opcElements:ETransporte[];

  readonly URL_API='http://localhost:3000/api/transportElement';

  constructor(private http:HttpClient) { 
    this.selectedElement=new ETransporte();

  }

  getElementos(id:string){
    return this.http.get(this.URL_API+`/${id}`);
  }

  getElementosLink(){
    return this.http.get(this.URL_API);
  }

  getElementosList(){
    return this.http.get(this.URL_API+"/list");
  }
  putElemento(elemento:ETransporte){
    console.log("eeeeee",elemento.idElementosTransporte);
    return this.http.put(this.URL_API+`/${elemento.idElementosTransporte}`,elemento);
  }

  deleteElement(elemento:ETransporte){
    return this.http.delete(this.URL_API+`/${elemento.idElementosTransporte}`);
  }
  postElement(elemento:ETransporte){
    console.log('se fue', elemento);
    return this.http.post(this.URL_API,elemento);
  }
}
