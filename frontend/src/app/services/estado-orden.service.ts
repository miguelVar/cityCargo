import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoOrden } from '../models/estado-orden';

@Injectable({
  providedIn: 'root'
})
export class EstadoOrdenService {

  selectedEstadoOrden: EstadoOrden;
  estadoOrden: EstadoOrden[];

  readonly URL_API = 'http://localhost:3000/api/estadoOrden';

  constructor(private http: HttpClient) {
    this.selectedEstadoOrden = new EstadoOrden();
  }

  getEstadoOrden() {
    return this.http.get(this.URL_API);
  }
}
