import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

declare var M: any;
let Cargo = false;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  tamarray: number;
  inicio:Conductor[]=[];

  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    Cargo = false;
    this.getConductor();
  }


  buscar(input, select) {
    var busqueda: Conductor[] = [], i;
    var look = 0;
    for (i = 0; i < this.inicio.length; i++) {
      if (select == 1) {
        if (this.inicio[i].nombreConductor.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.conductorService.conductor = busqueda;
          look++;
        }
        if (look < 1) {
          this.conductorService.conductor = [];
        }
      }
      else if (select == 2) {
        if (this.inicio[i].idConductor.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.inicio[i]);
          this.conductorService.conductor = busqueda;
          look++;
        }
        if (look < 1) {
          this.conductorService.conductor = [];
        }
      }
    }
  }

  getConductor() {
    this.conductorService.getConductores()
      .subscribe(res => {
        console.log(res);
        this.conductorService.conductor = res as Conductor[];
        this.inicio=res as Conductor[];
        this.tamarray = this.conductorService.conductor.length;
        Cargo = true;
      });
  }

  addConductor(form?: NgForm) {
    if (form.value.idConductor) {
      console.log(form.value);
      this.conductorService.putConductor(form.value)
        .subscribe(res => {
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">CONDUCTOR ACTUALIZADO</h4>
                  <p>El conductor ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getConductor();
        });
    } else {
      this.conductorService.postConductor(form.value)
        .subscribe(res => {
          this.resetForm(form);
          console.log(res);
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">CONDUCTOR CREADO</h4>
                  <p>El conductor se ha creado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getConductor();
        });
    }
  }

  editConductor(conductor: Conductor) {
    this.conductorService.selectedConductor = conductor;
  }

  eliminaConductor(conductor: Conductor) {
    this.deleteConductor(conductor);
  }

  deleteConductor(conductor: Conductor) {
    this.conductorService.deleteConductor(conductor)
      .subscribe(res => {
        this.getConductor();
        console.log(res);
      });
  }

  getConductor1(conductor: Conductor) {
    this.conductorService.selectedConductor = conductor;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.conductorService.selectedConductor = new Conductor();
  }

  yaCargo() {
    if (Cargo == false) {
      return false;
    } else {
      return true;
    }
  }

}
