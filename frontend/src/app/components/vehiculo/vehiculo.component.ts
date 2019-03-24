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

  constructor(private tipoVehiculoService: TipovehiculoService, private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getTipoVehiculo();
    this.getVehiculo();
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

  editVehiculo(vehiculo: Vehiculo){
    this.vehiculoService.selectedVehiculo = vehiculo;
  }

  eliminaTipoVehiculo(tipoVehiculo: Tipovehiculo) {
    this.deleteTipoVehiculo(tipoVehiculo);
  }

  getTipoVehiculo1(tipoVehiculo: Tipovehiculo) {
    this.tipoVehiculoService.selectedTipoVehiculo = tipoVehiculo;
  }

  deleteTipoVehiculo(tipoVehiculo: Tipovehiculo) {
    this.tipoVehiculoService.deleteTipoVehiculo(tipoVehiculo)
      .subscribe(res=>{
        this.getTipoVehiculo();
        console.log(res);
      });
  }

  resertForm(form?: NgForm) {
    if (form)
      form.reset();
    this.tipoVehiculoService.selectedTipoVehiculo = new Tipovehiculo();
  }

}
