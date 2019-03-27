import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { Orden } from '../../models/orden';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

declare var M: any;
let Cargo = false;

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  tamarray: number;

  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
    Cargo = false;
    this.getOrden();
  }

  getOrden() {
    this.ordenService.getOrdenes()
      .subscribe(res => {
        console.log(res);
        this.ordenService.orden = res as Orden[];
        this.tamarray = this.ordenService.orden.length;
        Cargo = true;
        console.log("tamarrayOrden", this.tamarray);
      })
  }

  addOrden(form?: NgForm) {
    if (form.value.idOrden) {
      console.log(form.value);
      this.ordenService.putOrden(form.value)
        .subscribe(res => {
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ORDEN ACTUALIZADA</h4>
                <p>La orden se ha sido actualizado satisfactoriamente</p>
                <hr>
            </div>`});
        });
    } else {
      this.ordenService.postOrden(form.value)
        .subscribe(res => {
          this.resetForm();
          console.log(form);
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">ORDEN CREADA</h4>
                  <p>La orden se ha creado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getOrden();
        });
    }

  }

  editOrden(orden: Orden) {
    this.ordenService.selectedOrdent = orden;
  }

  getOrden1(orden: Orden) {
    this.ordenService.selectedOrdent = orden;
  }

  eliminaOrden(orden: Orden) {
    this.deleteOrden(orden);
  }

  deleteOrden(orden: Orden) {
    this.ordenService.deleteOrden(orden)
      .subscribe(res => {
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
              <h4 class="alert-heading">ORDEN ELIMINADA!!!</h4>
              <p>La orden ha sido eliminada satisfactoriamente</p>
              <hr>
          </div>`});
        this.getOrden();
      });
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.ordenService.selectedOrdent = new Orden();
  }

  yaCargo() {
    if (Cargo == false) {
      return false;
    } else {
      return true;
    }
  }

}
