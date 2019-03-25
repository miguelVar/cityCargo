import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  selectedOrdent: Orden;
  orden: Orden[];

  readonly URL_API = 'http://localhost:3000/api/orden';

  constructor(private http: HttpClient) {
    this.selectedOrdent = new Orden();
  }

  getOrdenes() {
    return this.http.get(this.URL_API);
  }

  postOrden(orden: Orden) {
    return this.http.post(this.URL_API, orden);
  }

  putOrden(orden: Orden) {
    console.log("id actualizar" + orden.idOrden);
    return this.http.put(this.URL_API + `/${orden.idOrden}`, orden);
  }

  deleteOrden(orden: Orden) {
    console.log("id eliminar" + orden.idOrden);
    return this.http.delete(this.URL_API + `/${orden.idOrden}`)
  }

}
