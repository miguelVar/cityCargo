import { Component, OnInit } from '@angular/core';
import { ETransporteService } from 'src/app/services/e-transporte.service';

@Component({
  selector: 'app-e-transporte',
  templateUrl: './e-transporte.component.html',
  styleUrls: ['./e-transporte.component.css']
})
export class ETransporteComponent implements OnInit {

  constructor(private serviceElementos:ETransporteService) { 

  }

  ngOnInit() {

  }


  addElement(){
    
  }

}
