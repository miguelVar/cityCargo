import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-eliminado',
  templateUrl: './vehiculo-eliminado.component.html',
  styleUrls: ['./vehiculo-eliminado.component.css']
})
export class VehiculoEliminadoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculoEliminado();
  }

  getVehiculoEliminado() {
    this.vehiculoService.getVehiculosEliminados()
      .subscribe(res => {
        console.log(res);
        this.vehiculoService.vehiculo = res as Vehiculo[];
      })
  }
  

}
