import { Component, OnInit } from '@angular/core';
import { ETransporteService } from 'src/app/services/e-transporte.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ETransporte } from 'src/app/models/e-transporte';

@Component({
  selector: 'app-e-transporte',
  templateUrl: './e-transporte.component.html',
  styleUrls: ['./e-transporte.component.css']
})
export class ETransporteComponent implements OnInit {

  ruta:string[];
  tamarray:number;

  constructor(private serviceElementos:ETransporteService, private serviceCity:ServicioService, private route:Router) { 
    this.ruta=this.route.url.split('/');
  }

  ngOnInit() {
    this.getServices();
    this.getElements();

  }


  addElement(form?:NgForm){
    console.log('data elemento', form.value);
    this.serviceElementos.postElement(form.value)
      .subscribe(res=>{
        console.log('agregadoo', res);
      })

  }

  getServices(){
    this.serviceCity.getServicesLink()
      .subscribe(res=>{
        console.log('servicios', res);
        this.serviceElementos.servicios=res as Servicio[];
      });
  }

  getElements(){
    if(this.ruta.length==3){
      this.serviceElementos.getElementos(this.ruta[2])
      .subscribe(res=>{
        console.log("Elementos", res);
        this.serviceElementos.elementos=res as ETransporte[];
        this.tamarray=this.serviceElementos.elementos.length;
      });

    }else{

      this.serviceElementos.getElementosLink()
      .subscribe(res=>{
        console.log("Elementos", res);
        this.serviceElementos.elementos=res as ETransporte[];
        this.tamarray=this.serviceElementos.elementos.length;
      });

    }

  }

  asignaServicio(){
    this.serviceElementos.selectedElement.Servicio_idServicio=parseInt(this.ruta[2]);
  }

}
