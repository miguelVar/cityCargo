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

  getConductorEliminado(){
    return this.http.get(this.URL_API + `/getConductoresEliminados`);
  }
}
