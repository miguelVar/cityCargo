import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from '../models/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  selectedConductor: Conductor;
  conductor: Conductor[];

  readonly URL_API = 'http://localhost:3000/api/conductor';

  constructor(private http: HttpClient) {
    this.selectedConductor = new Conductor();
  }

  getConductores() {
    return this.http.get(this.URL_API);
  }

  getConductorEliminado() {
    return this.http.get(this.URL_API + `/getConductoresEliminados`);
  }

  putConductor(conductor: Conductor) {
    console.log("id actualizar" + conductor.idConductor);
    return this.http.put(this.URL_API + `/${conductor.idConductor}`, conductor)
  }

  postConductor(conductor: Conductor) {
    return this.http.post(this.URL_API, conductor);
  }

  deleteConductor(conductor: Conductor) {
    console.log("id eliminar" + conductor.idConductor);
    return this.http.put(this.URL_API + '/deletelogicoconductor/' + `${conductor.idConductor}`, conductor)
  }

}
