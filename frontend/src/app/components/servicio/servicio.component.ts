import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(private serviceCity:ServicioService) { }

  ngOnInit() {
    this.getServicios();
  }

  getServicios(){
    this.serviceCity.getServices()
      .subscribe(res=>{
        console.log("dataaaa",res);
        this.serviceCity.services=res as Servicio[];

      });
  }

}
