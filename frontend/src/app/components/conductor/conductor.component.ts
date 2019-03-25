import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.getConductor();
  }

  getConductor() {
    this.conductorService.getConductores()
      .subscribe(res => {
        console.log(res);
        this.conductorService.conductor = res as Conductor[];
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

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.conductorService.selectedConductor = new Conductor();
  }

}
