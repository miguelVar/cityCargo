import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  
  selectedClient:Clients;
  clients:Clients[];
  clientsDeleted:Clients[];

  readonly URL_API='http://localhost:3000/api/clients';

  constructor(private http:HttpClient) {
    this.selectedClient=new Clients();

   }

   getClients(){
    return this.http.get(this.URL_API);
  }
  getclientsDeletedLogic(){
    return this.http.get(this.URL_API+"/deletedClient");
  }
  getCountTel(client:Clients){
    return this.http.get(this.URL_API+"/counttel"+`/${client.celularCliente}`);
  }
   postClient( cliente:Clients){
    return this.http.post(this.URL_API,cliente)
  }

  putClient(cliente:Clients){
    return this.http.put(this.URL_API+`/${cliente.idCliente}`,cliente);
  }

  putDeleteLogic(cliente:Clients){
    return this.http.put(this.URL_API+"/deletelogic"+`/${cliente.idCliente}`,cliente);
  }

}



