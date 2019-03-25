import { Component, OnInit } from '@angular/core';
import { TipovehiculoService } from '../../services/tipovehiculo.service';
import { VehiculoService } from '../../services/vehiculo.service';
import { NgForm } from '@angular/forms';
import { Tipovehiculo } from '../../models/tipovehiculo';
import { Vehiculo } from '../../models/vehiculo';
import decode from 'jwt-decode';

declare var M: any;

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculo: Vehiculo[] = [];

  constructor(private tipoVehiculoService: TipovehiculoService, private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getTipoVehiculo();
    this.getVehiculo();
  }

  buscar(input, select) {
    var busqueda: Vehiculo[] = [], i;
    var look = 0;
    for (i = 0; i < this.vehiculo.length; i++) {
      if (select == 1) {
        if (this.vehiculo[i].placaVehiculo.toUpperCase().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.vehiculo[i]);
          this.vehiculoService.vehiculo = busqueda;
          look++;
        }
        if (look < 1) {
          this.vehiculoService.vehiculo = [];
        }
      }
      else if (select == 2) {
        if (this.vehiculo[i].idVehiculo.toString().indexOf(input.toUpperCase()) > -1) {
          busqueda.push(this.vehiculo[i]);
          this.vehiculoService.vehiculo = busqueda;
          look++;
        }
        if (look < 1) {
          this.vehiculoService.vehiculo = [];
        }
      }
    }
  }

  getVehiculo() {
    this.vehiculoService.getVehiculos()
      .subscribe(res => {
        console.log(res);
        this.vehiculoService.vehiculo = res as Vehiculo[];
      })
  }

  getTipoVehiculo() {

    this.tipoVehiculoService.getTipoVehiculos()
      .subscribe(res => {
        console.log(res);
        this.tipoVehiculoService.tipovehiculo = res as Tipovehiculo[];
      });
  }

  addVehiculo(form?: NgForm) {
    if (form.value.idVehiculo) {
      console.log(form.value);
      this.vehiculoService.putVehiculo(form.value)
        .subscribe(res => {
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">VEHICULO ACTUALIZADO</h4>
                  <p>El vehiculo ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getVehiculo();
        });
    } else {
      this.vehiculoService.postVehiculo(form.value)
        .subscribe(res => {
          this.resetFormVehiculo(form);
          console.log(res);
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">VEHICULO CREADO</h4>
                  <p>El vehiculo se ha creado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getVehiculo();
        });
    }
  }

  addTipoVehiculo(form?: NgForm) {
    if (form.value.idTipoVehiculo) {
      console.log(form.value);
      this.tipoVehiculoService.putTipoVehiculo(form.value)
        .subscribe(res => {
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">TIPO VEHICULO ACTUALIZADO</h4>
                  <p>El tipo de vehiculo ha sido actualizado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getTipoVehiculo();
        });
    } else {
      this.tipoVehiculoService.postTipoVehiculo(form.value)
        .subscribe(res => {
          this.resertForm(form);
          console.log(res);
          M.toast({
            html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">TIPO DE VEHICULO CREADO</h4>
                  <p>El tipo de vehiculo se ha creado satisfactoriamente</p>
                  <hr>
              </div>`});
          this.getTipoVehiculo();
        });
    }
  }

  editTipoVehiculo(tipovehiculo: Tipovehiculo) {
    this.tipoVehiculoService.selectedTipoVehiculo = tipovehiculo;
  }

  editVehiculo(vehiculo: Vehiculo) {
    this.vehiculoService.selectedVehiculo = vehiculo;
  }

  eliminaTipoVehiculo(tipoVehiculo: Tipovehiculo) {
    this.deleteTipoVehiculo(tipoVehiculo);
  }

  eliminaVehiculo(vehiculo: Vehiculo) {
    this.deleteVehiculo(vehiculo);
  }

  getTipoVehiculo1(tipoVehiculo: Tipovehiculo) {
    this.tipoVehiculoService.selectedTipoVehiculo = tipoVehiculo;
  }

  getVehiculo1(vehiculo: Vehiculo) {
    this.vehiculoService.selectedVehiculo = vehiculo;
  }

  deleteTipoVehiculo(tipoVehiculo: Tipovehiculo) {
    this.tipoVehiculoService.deleteTipoVehiculo(tipoVehiculo)
      .subscribe(res => {
        this.getTipoVehiculo();
        console.log(res);
      });
  }

  deleteVehiculo(vehiculo: Vehiculo) {
    this.vehiculoService.deleteVehiculo(vehiculo)
      .subscribe(res => {
        this.getVehiculo();
        console.log(res);
      });
  }

  resertForm(form?: NgForm) {
    if (form)
      form.reset();
    this.tipoVehiculoService.selectedTipoVehiculo = new Tipovehiculo();
  }

  resetFormVehiculo(form?: NgForm) {
    if (form)
      form.reset();
    this.vehiculoService.selectedVehiculo = new Vehiculo();
  }

}
