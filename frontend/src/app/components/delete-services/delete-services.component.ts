import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';

declare var M:any;

@Component({
  selector: 'app-delete-services',
  templateUrl: './delete-services.component.html',
  styleUrls: ['./delete-services.component.css']
})
export class DeleteServicesComponent implements OnInit {

  tamarray:number;
  inicio:Servicio[]=[];

  constructor(private serviceCity:ServicioService) { 

  }

  ngOnInit() {
    this.servicesDeleted();
  }

  buscar(input, select) {
    var busqueda: Servicio[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreServicio.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.servicesDeleted = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.servicesDeleted = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idServicio.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.servicesDeleted = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.servicesDeleted = [];
        }
      }
    }
  }



  servicesDeleted(){
    this.serviceCity.getServicesDeletedLogi()
      .subscribe(res=>{
        console.log('servicios eliminados ', res);
        this.serviceCity.servicesDeleted=res as Servicio[];
        this.tamarray=this.serviceCity.servicesDeleted.length;
        this.inicio=res as Servicio[];
      })
  }

  dataServiceRestaurar(servicio:Servicio){
    this.serviceCity.selectedServiceCityCargo=servicio;
  }

  restaurarService(servicio:Servicio){
    this.serviceCity.putDeletedLogicService(servicio)
      .subscribe(res=>{
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ELEMENTO RESTAURADO!!</h4>
                <p>El servicio ha sido restaurado satisfactoriamente</p>
                <hr>
            </div>`});
        this.servicesDeleted();
      });
  }

}
