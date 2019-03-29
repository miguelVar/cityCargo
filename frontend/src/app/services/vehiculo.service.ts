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

  getVehiculosEliminados() {
    return this.http.get(this.URL_API + `/getVehiculosEliminados`);
  }

  getCountPlaca(vehiculo:Vehiculo) {
    return this.http.get(this.URL_API + `/countplaca`+`/${vehiculo.placaVehiculo}`);
  }

  restauraVehiculoEliminado(vehiculo: Vehiculo) {
    return this.http.put(this.URL_API + `/restauralogicovehiculo` + `/${vehiculo.idVehiculo}`, vehiculo);
  }

  postVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.URL_API, vehiculo);
  }

  putVehiculo(vehiculo: Vehiculo) {
    console.log("id actualizar" + vehiculo.idVehiculo);
    return this.http.put(this.URL_API + `/${vehiculo.idVehiculo}`, vehiculo);
  }

  deleteVehiculo(vehiculo: Vehiculo) {
    console.log("id a eliminar " + vehiculo.idVehiculo);
    return this.http.put(this.URL_API + '/deletelogicovehiculo/' + `${vehiculo.idVehiculo}`, vehiculo);
  }

  deleteFisicoVehiculo(vehiculo: Vehiculo) {
    console.log("id a eliminar " + vehiculo.idVehiculo);
    return this.http.delete(this.URL_API + `/${vehiculo.idVehiculo}`)
  }

}
