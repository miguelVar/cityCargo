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
let Cargo=false;

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  ruta:string[];
  tamarray:number;
  inicio: Servicio[] = [];

  constructor(private serviceCity:ServicioService, private clientService:ClientsService, private route:Router) { 

    this.ruta=this.route.url.split('/');
  }

  ngOnInit() {
    Cargo=false;
    this.getServicios();
    this.getClients();
    this.getVehiculos();
    this.getOrdenes();
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
    }
  }

  
  buscar(input, select) {
    var busqueda: Servicio[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreServicio.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.services = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.services = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idServicio.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.services = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.services = [];
        }
      }
    }
  }

  editService(servicio:Servicio){
    this.serviceCity.selectedServiceCityCargo=servicio;
    let fechaInicio=String(this.serviceCity.selectedServiceCityCargo.fechaInicioServicio).substring(0,10);
    this.serviceCity.selectedServiceCityCargo.fechaInicioServicio=fechaInicio;
    let fechaFin=String(this.serviceCity.selectedServiceCityCargo.fechaFinServicio).substring(0,10);
    this.serviceCity.selectedServiceCityCargo.fechaFinServicio=fechaFin;
    console.log('fecha inicio', this.serviceCity.selectedServiceCityCargo.fechaInicioServicio);
    // console.log('fecha inicio', fecha.substring(0,10));

  }


  getServicios(){
    console.log('sfdsf', this.ruta.length);
    if(this.ruta.length==3){
      console.log('id cliente ', this.ruta[2]);
      this.serviceCity.getServices(this.ruta[2])
        .subscribe(res=>{
          console.log("dataaaa",res);
          this.serviceCity.services=res as Servicio[];
          this.inicio=res as Servicio[];
          this.tamarray=this.serviceCity.services.length;
          console.log('ramanoooooooo', this.tamarray);
          Cargo=true;

  
        });

    }else{

      this.serviceCity.getServicesLink()
        .subscribe(res=>{
          console.log("dataaaa",res);
          this.serviceCity.services=res as Servicio[];
          this.inicio=res as Servicio[];
          Cargo=true;
  
        });


    }
  
  }

  addService(form?:NgForm){
    console.log('Dat sera', form.value);
    if(form.value.idServicio){
      this.serviceCity.putServicio(form.value)
        .subscribe(res=>{

          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">SERVICIO ACTUALIZADO!!</h4>
                  <p>El servicio ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});

              this.getServicios();
        });

    }else{

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
            // this.resetForm(form);
      });
      
    }
   
  }

  detallesServicio(servicio:Servicio){
    this.serviceCity.selectedServiceCityCargo=servicio;
    console.log('data ver detalles ', this.serviceCity.selectedServiceCityCargo);

  }

  finalizarServicio(service:Servicio){
    this.serviceCity.finalizarServicio(service)
      .subscribe(res=>{
        console.log('estado actualizado', res);
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ESTADO ACTUALIZADO!!</h4>
                <p>El estado ha sido actualizado satisfactoriamente</p>
                <hr>
            </div>`});
        this.serviceCity.actulizarEstadoOrden(service)
          .subscribe(res=>{
            console.log('Estado orden atualiado', res);

          });

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

  serviceDeleteLogicData(servicio:Servicio){
    this.serviceCity.selectedServiceCityCargo=servicio;
  }

  deleteLogicService(servicio:Servicio){
    this.serviceCity.putDeletedLogicService(servicio)
      .subscribe(res=>{
        console.log('borrado', res);
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">SERVICIO ELIMINADO!!</h4>
                <p>El servicio ha sido eliminado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getServicios();
      })
  }


  yaCargo() {
    if (Cargo == false) {
      return false;
    } else {
      return true;
    }
  }

}
