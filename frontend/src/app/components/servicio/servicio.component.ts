import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';
import { NgForm } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from 'src/app/models/clients';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { Orden } from 'src/app/models/orden';

declare var M:any;

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  ruta:string[];
  tamarray:number;

  constructor(private serviceCity:ServicioService, private clientService:ClientsService, private route:Router) { 

    this.ruta=this.route.url.split('/');
  }

  ngOnInit() {
    this.getServicios();
    this.getClients();
    this.getVehiculos();
    this.getOrdenes();
  }

  getServicios(){
    console.log('sfdsf', this.ruta.length);
    if(this.ruta.length==3){
      console.log('id cliente ', this.ruta[2]);
      this.serviceCity.getServices(this.ruta[2])
        .subscribe(res=>{
          console.log("dataaaa",res);
          this.serviceCity.services=res as Servicio[];
          this.tamarray=this.serviceCity.services.length;
          console.log('ramanoooooooo', this.tamarray);
  
        });

    }else{

      this.serviceCity.getServicesLink()
        .subscribe(res=>{
          console.log("dataaaa",res);
          this.serviceCity.services=res as Servicio[];
  
        });


    }
  
  }

  addService(form?:NgForm){
    console.log('Dat sera', form.value);
    this.serviceCity.postService(form.value)
      .subscribe(res=>{
        console.log('Registrado');
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">SERVICIO AGREGADO!!</h4>
                <p>El servicio ha sido agregado satisfactoriamente</p>
                <hr>
            </div>`});

            this.getServicios();
      });
  }

  getClients(){
    this.clientService.getClients()
      .subscribe(res=>{
        console.log('clientes', res);
        this.serviceCity.clientes=res as Clients[];
      });
  }

  getVehiculos(){
    this.serviceCity.getVehiculos()
      .subscribe(res=>{
        this.serviceCity.vehiculos=res as Vehiculo[];
        console.log('vehiculos', res);
      });
  }

  getOrdenes(){
    this.serviceCity.getOrdenes()
      .subscribe(res=>{
        this.serviceCity.ordenes=res as Orden[];
        console.log('ordenes', res);
      });
  }

  asignaCliente(){
    if(this.ruta.length==3){
      this.serviceCity.selectedServiceCityCargo.Cliente_idCliente=parseInt(this.ruta[2]);
    }

  }

}
