import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipovehiculo } from '../models/tipovehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipovehiculoService {

  selectedTipoVehiculo:Tipovehiculo;
  tipovehiculo: Tipovehiculo[];

  readonly URL_API = 'http://localhost:3000/api/tipovehiculo';

  constructor(private http:HttpClient) {
    this.selectedTipoVehiculo = new Tipovehiculo();
   }

   getTipoVehiculos(){
     return this.http.get(this.URL_API);
   }
}
