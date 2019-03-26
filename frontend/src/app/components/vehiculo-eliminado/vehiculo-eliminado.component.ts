import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-vehiculo-eliminado',
  templateUrl: './vehiculo-eliminado.component.html',
  styleUrls: ['./vehiculo-eliminado.component.css']
})
export class VehiculoEliminadoComponent implements OnInit {

  vehiculoEliminado: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculoEliminado();
  }

  buscar(input2, select2) {
    var busqueda: Vehiculo[] = [], i;
    var look = 0;
    for (i = 0; i < this.vehiculoEliminado.length; i++) {
      if (select2 == 1) {
        if (this.vehiculoEliminado[i].placaVehiculo.toUpperCase().indexOf(input2.toUpperCase()) > -1) {
          busqueda.push(this.vehiculoEliminado[i]);
          this.vehiculoService.vehiculo = busqueda;
          look++;
        }
        if (look > 1) {
          this.vehiculoService.vehiculo = [];
        }
      }
      else if (select2 == 2) {
        if (this.vehiculoEliminado[i].idVehiculo.toString().indexOf(input2.toUpperCase()) > -1) {
          busqueda.push(this.vehiculoEliminado[i]);
          this.vehiculoService.vehiculo = busqueda;
          look++;
        }
        if (look < 1) {
          this.vehiculoService.vehiculo = [];
        }
      }
    }
  }

  getVehiculoEliminado() {
    this.vehiculoService.getVehiculosEliminados()
      .subscribe(res => {
        console.log(res);
        this.vehiculoService.vehiculo = res as Vehiculo[];
        console.log("acaaaaaaaaaaaaaaa",this.vehiculoEliminado = res as Vehiculo[]);
        this.vehiculoEliminado = res as Vehiculo[];
      })
  }

  getVehiculoEliminado1(vehiculo: Vehiculo) {
    this.vehiculoService.selectedVehiculo = vehiculo;
  }

  restauraVehiculo(vehiculo: Vehiculo) {
    console.log('dddddddddddddddddd', vehiculo);
    this.vehiculoService.restauraVehiculoEliminado(vehiculo)
      .subscribe(res => {
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ÉXITO!!!</h4>
                <p>El vehiculo ha sido restaurado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getVehiculoEliminado();
      })

  }

  eliminaVehiculoFisico(vehiculo: Vehiculo) {
    this.deleteVehiculoFisico(vehiculo);
  }

  deleteVehiculoFisico(vehiculo: Vehiculo) {
    this.vehiculoService.deleteFisicoVehiculo(vehiculo)
      .subscribe(res => {
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">VEHICULO ELIMINADO!!!</h4>
                <p>El vehiculo ha sido eliminado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getVehiculoEliminado();
      });
  }


}
