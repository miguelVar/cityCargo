import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  
  clients:Clients[];

  readonly URL_API='http://localhost:3000/api/clients';

  constructor(private http:HttpClient) {

   }

   getClients(){
    return this.http.get(this.URL_API);
  }

   postClient( cliente:Clients){
    return this.http.post(this.URL_API,cliente)
  }

}



