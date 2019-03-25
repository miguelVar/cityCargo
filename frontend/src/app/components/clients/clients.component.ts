import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from 'src/app/models/clients';
import { from } from 'rxjs';

declare var M: any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService:ClientsService) { }

  ngOnInit() {
    this.getClients();
  }


  getClients(){
    this.clientService.getClients()
      .subscribe(res=>{
        this.clientService.clients=res as Clients[];
        console.log('Data front', res);
      });
  }

  clientDeleteLogicData(client:Clients){
    this.clientService.selectedClient=client;
  }

  deleteLogicClient(client:Clients){
    this.clientService.putDeleteLogic(client)
      .subscribe(res=>{

        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">CLIENTE ELIMINADO!!</h4>
                <p>El cliente ha sido eliminado de manera logica satisfactoriamente</p>
                <hr>
            </div>`});

            this.getClients();

      });

  }


  addClient(form?: NgForm){
    console.log("datos", form.value);

    if(form.value.idCliente){
      alert('editar');
      this.clientService.putClient(form.value)
        .subscribe(res=>{
          console.log("actualizado", res);
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">CLIENTE ACTUALIZADO!!</h4>
                  <p>El cliente ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});

              this.getClients();

        });

    }else{

      this.clientService.postClient(form.value)
      .subscribe(res=>{
        console.log('Agregado exitoso',res);
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">CLIENTE AGREGADO!!</h4>
                <p>El cliente ha sido agregado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getClients();
      })

    }

  }

  editClient(client:Clients){
    console.log('dsfsd', client);
    this.clientService.selectedClient=client;
    console.log('Solo',this.clientService.selectedClient.nombreCliente);
  }

}
