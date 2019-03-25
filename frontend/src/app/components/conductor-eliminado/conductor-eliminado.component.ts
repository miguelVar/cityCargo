import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor.service';
import { Conductor } from '../../models/conductor';
import { from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-conductor-eliminado',
  templateUrl: './conductor-eliminado.component.html',
  styleUrls: ['./conductor-eliminado.component.css']
})
export class ConductorEliminadoComponent implements OnInit {

  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.getConductorEliminado();
  }

  getConductorEliminado() {
    this.conductorService.getConductorEliminado()
      .subscribe(res => {
        console.log(res);
        this.conductorService.conductor = res as Conductor[];
      });
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

}
