import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor.service';
import { Conductor } from '../../models/conductor';
import { from } from 'rxjs';

declare var M: any;
let Cargo = false;

@Component({
  selector: 'app-conductor-eliminado',
  templateUrl: './conductor-eliminado.component.html',
  styleUrls: ['./conductor-eliminado.component.css']
})
export class ConductorEliminadoComponent implements OnInit {

  tamarray:number;
  inicio:Conductor[]=[];

  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    Cargo = false;
    this.getConductorEliminado();
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

  getConductorEliminado() {
    this.conductorService.getConductorEliminado()
      .subscribe(res => {
        console.log(res);
        this.conductorService.conductor = res as Conductor[];
        this.inicio=res as Conductor[];
        this.tamarray = this.conductorService.conductor.length;
        Cargo = true;
      });
  }

  getConductorEliminado1(conductor: Conductor) {
    this.conductorService.selectedConductor = conductor;
  }

  eliminaConductorFisico(conductor: Conductor) {
    this.deleteConductorFisico(conductor);
  }

  deleteConductorFisico(conductor: Conductor) {
    this.conductorService.deleteFisidoConductor(conductor)
      .subscribe(res => {
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
              <h4 class="alert-heading">CONDUCTOR ELIMINADO!!!</h4>
              <p>El conductor ha sido eliminado satisfactoriamente</p>
              <hr>
          </div>`});
        this.getConductorEliminado();
      })
  }

  restauraConductor(conductor: Conductor) {
    console.log('dddddddddddddddddd', conductor);
    this.conductorService.restauraConductorEliminado(conductor)
      .subscribe(res => {
        M.toast({
          html: `<div class="alert alert-success" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                <h4 class="alert-heading">ÉXITO!!!</h4>
                <p>El vehiculo ha sido restaurado satisfactoriamente</p>
                <hr>
            </div>`});
        this.getConductorEliminado();
      })
  }

  yaCargo() {
    if (Cargo == false) {
      return false;
    } else {
      return true;
    }
  }

}
