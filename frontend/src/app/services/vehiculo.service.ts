import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  selectedVehiculo: Vehiculo;
  vehiculo: Vehiculo[];

  readonly URL_API = 'http://localhost:3000/api/vehiculo';

  constructor(private http: HttpClient) { 
    this.selectedVehiculo = new Vehiculo();
  }

  getVehiculos() {
    return this.http.get(this.URL_API);
  }
}
