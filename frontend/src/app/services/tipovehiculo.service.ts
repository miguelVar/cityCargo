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

   postTipoVehiculo(Tipovehiculo:Tipovehiculo){
     return this.http.post(this.URL_API, Tipovehiculo);
   }

   putTipoVehiculo(tipovehiculo:Tipovehiculo){
     console.log("id actualizar " + tipovehiculo.idTipoVehiculo);
     return this.http.put(this.URL_API + `/${tipovehiculo.idTipoVehiculo}`, tipovehiculo);
   }
}
