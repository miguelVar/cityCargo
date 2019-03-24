import { Component, OnInit } from '@angular/core';
import { TipovehiculoService } from '../../services/tipovehiculo.service';
import { NgForm } from '@angular/forms';
import { Tipovehiculo } from '../../models/tipovehiculo';
import decode from 'jwt-decode';

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
        this.tipoVehiculoService.tipovehiculo = res as Tipovehiculo[];
      });
  }

}
