import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor.service';
import { Conductor } from '../../models/conductor';
import { from } from 'rxjs';

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

}
