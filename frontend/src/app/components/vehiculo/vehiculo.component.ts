import { Component, OnInit } from '@angular/core';
import { TipovehiculoService } from '../../services/tipovehiculo.service';
import { NgForm } from '@angular/forms';
import { Tipovehiculo } from '../../models/tipovehiculo';
import decode from 'jwt-decode';

declare var M: any;

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private tipoVehiculoService: TipovehiculoService) { }

  ngOnInit() {
    this.getTipoVehiculo();
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

  resertForm(form?: NgForm) {
    if (form)
      form.reset();
    this.tipoVehiculoService.selectedTipoVehiculo = new Tipovehiculo();
  }

}
