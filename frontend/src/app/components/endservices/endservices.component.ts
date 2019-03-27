import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-endservices',
  templateUrl: './endservices.component.html',
  styleUrls: ['./endservices.component.css']
})
export class EndservicesComponent implements OnInit {

  inicio:Servicio[]=[];

  constructor(private serviceCity:ServicioService) { }

  ngOnInit() {
    this.getServicesFinalizados();
  }



  buscar(input, select) {
    var busqueda: Servicio[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreServicio.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.servicesFinalizados = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.servicesFinalizados = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idServicio.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceCity.servicesFinalizados = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceCity.servicesFinalizados = [];
        }
      }
    }
  }


  getServicesFinalizados(){
    this.serviceCity.getServicesFinalizados()
      .subscribe(res=>{
        this.serviceCity.servicesFinalizados=res as Servicio[];
        this.inicio=res as Servicio[];
      });
  }

}
