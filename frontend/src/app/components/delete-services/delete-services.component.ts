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
  constructor(private serviceCity:ServicioService) { 

  }

  ngOnInit() {
    this.servicesDeleted();
  }


  servicesDeleted(){
    this.serviceCity.getServicesDeletedLogi()
      .subscribe(res=>{
        console.log('servicios eliminados ', res);
        this.serviceCity.servicesDeleted=res as Servicio[];
        this.tamarray=this.serviceCity.servicesDeleted.length;
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
