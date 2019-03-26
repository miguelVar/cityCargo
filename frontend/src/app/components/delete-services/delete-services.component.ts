import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';

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
        this.servicesDeleted();
      });
  }

}
