import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ETransporte } from '../models/e-transporte';

@Injectable({
  providedIn: 'root'
})
export class ETransporteService {


  readonly URL_API='localhost:3000/api/transportElement';

  constructor(private http:HttpClient) { 

  }

  postElement(elemento:ETransporte){
    return this.http.post(this.URL_API,elemento);
  }
}
