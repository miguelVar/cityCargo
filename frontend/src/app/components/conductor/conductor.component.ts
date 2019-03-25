import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

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

}
