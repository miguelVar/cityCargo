import { Component, OnInit } from '@angular/core';
import { ETransporteService } from 'src/app/services/e-transporte.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ETransporte } from 'src/app/models/e-transporte';

declare var M:any;
let cargo=false;
@Component({
  selector: 'app-e-transporte',
  templateUrl: './e-transporte.component.html',
  styleUrls: ['./e-transporte.component.css']
})
export class ETransporteComponent implements OnInit {

  ruta:string[];
  tamarray:number;
  inicio:ETransporte[]=[];

  constructor(private serviceElementos:ETransporteService, private serviceCity:ServicioService, private route:Router) { 
    this.ruta=this.route.url.split('/');
  }

  ngOnInit() {
    cargo=false;
    this.getServices();
    this.getElements();
    this.getElementsList();

  }

  
  buscar(input, select) {
    var busqueda: ETransporte[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreElemento.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceElementos.elementos = busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceElementos.elementos = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idElementosTransporte.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.serviceElementos.elementos= busqueda;
          look++;
        }
        if (look < 1) {
          this.serviceElementos.elementos = [];
        }
      }
    }
  }


  resetForm(form?: NgForm) {
    if(form){
      form.reset();
    }
  }


  addElement(form?:NgForm){
    console.log('data elemento', form.value);
    if(form.value.idElementosTransporte){
      this.serviceElementos.putElemento(form.value)
        .subscribe(res=>{
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">ELEMENTO ACTUALIZADO!!</h4>
                  <p>El elemento ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getElements();

        });

    }else{

      this.serviceElementos.postElement(form.value)
      .subscribe(res=>{
        console.log('agregadoo', res);

        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ELEMENTO AGREGADO!!</h4>
                <p>El elemento ha sido agregado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getElements();
        // this.resetForm(form);
        this.getElementsList();
      })

    }
  

  }


  deleleElement(elemento:ETransporte){
    this.serviceElementos.selectedElement=elemento;
  }
  deleteFisicaElement(elemento:ETransporte){
    this.serviceElementos.deleteElement(elemento)
      .subscribe(res=>{
        console.log('eliminado', res);
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ELEMENTO ELIMINADO!!</h4>
                <p>El elemento ha sido eliminado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getElements();
      })
  }
  editElements(elemento:ETransporte){
    console.log('data editar', elemento);
    this.serviceElementos.selectedElement=elemento;
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
        this.inicio=res as ETransporte[];
        this.tamarray=this.serviceElementos.elementos.length;
        cargo=true;
      });

    }else{

      this.serviceElementos.getElementosLink()
      .subscribe(res=>{
        console.log("Elementos", res);
        this.serviceElementos.elementos=res as ETransporte[];
        this.inicio=res as ETransporte[];
        this.tamarray=this.serviceElementos.elementos.length;
        cargo=true;
      });

    }

  }

  getElementsList(){
    this.serviceElementos.getElementosList()
      .subscribe(res=>{
        this.serviceElementos.opcElements=res as ETransporte[];
        console.log('opc elementos', res);
      })
  }

  asignaServicio(){
    this.serviceElementos.selectedElement.Servicio_idServicio=parseInt(this.ruta[2]);
  }

  yaCargo() {
    if (cargo == false) {
      return false;
    } else {
      return true;
    }
  }

}
