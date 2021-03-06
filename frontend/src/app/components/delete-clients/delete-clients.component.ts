import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from 'src/app/models/clients';

declare var M:any;
@Component({
  selector: 'app-delete-clients',
  templateUrl: './delete-clients.component.html',
  styleUrls: ['./delete-clients.component.css']
})
export class DeleteClientsComponent implements OnInit {

  inicio:Clients[]=[];
  tamarray: number;

  constructor(private clientService:ClientsService) { }

  ngOnInit() {
    this.getClientDeletedLogic();
  }

  buscar(input, select) {
    var busqueda: Clients[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreCliente.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.clientService.clientsDeleted = busqueda;
          look++;
        }
        if (look < 1) {
          this.clientService.clientsDeleted = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idCliente.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.clientService.clientsDeleted = busqueda;
          look++;
        }
        if (look < 1) {
          this.clientService.clientsDeleted = [];
        }
      }
    }
  }


  dataClientRestaurar(client:Clients){
    this.clientService.selectedClient=client;

  }

  restaurarClient(client:Clients){
    this.clientService.putDeleteLogic(client)
      .subscribe(res=>{
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">CLIENTE RESTAURADO!!</h4>
                <p>El cliente ha sido restaurado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getClientDeletedLogic();
      })

  }

  getClientDeletedLogic(){
    this.clientService.getclientsDeletedLogic()
      .subscribe(res=>{
        console.log('date deleted', res);
        this.clientService.clientsDeleted=res as Clients[];
        this.inicio=res as Clients[];
        this.tamarray = this.clientService.clientsDeleted.length;
      });
  }

}
