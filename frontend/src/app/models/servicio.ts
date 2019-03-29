import { Time } from '@angular/common';

export class Servicio {

    constructor(idServicio=0,nombreServicio='',descripcionServicio='',valorServicio=0,horaInicioServicio=null,horaFinServicio=null,fechaInicioServicio=null,
        fechaFinServicio=null,observacion='',ciudadOrigen='',ciudadDestino='',direccionOrigenServicio='', direccionDestinoServicio='',
        estadoEliminado=false, Cliente_idCliente=0, Vehiculo_idVehiculo=0, Orden_idOrden=0, Estado_idEstadoOrden=0){

            this.idServicio=idServicio;
            this.nombreServicio=nombreServicio;
            this.descripcionServicio=descripcionServicio;
            this.valorServicio=valorServicio;
            this.horaInicioServicio=horaInicioServicio;
            this.horaFinServicio=horaFinServicio;
            this.fechaInicioServicio=fechaInicioServicio;
            this.fechaFinServicio=fechaFinServicio;
            this.observacion=observacion;
            this.ciudadOrigen=ciudadOrigen;
            this.ciudadDestino=ciudadDestino;
            this.direccionOrigenServicio=direccionOrigenServicio;
            this.direccionDestinoServicio=direccionDestinoServicio;
            this.estadoEliminado=estadoEliminado;
            this.Cliente_idCliente=Cliente_idCliente;
            this.Vehiculo_idVehiculo=Vehiculo_idVehiculo;
            this.Orden_idOrden=Orden_idOrden;
            this.Estado_idEstadoOrden=Estado_idEstadoOrden;


    }

    idServicio:number;
    nombreServicio:string;
	descripcionServicio:string;
	valorServicio:number;
	horaInicioServicio:Time;
	horaFinServicio:Time;
	fechaInicioServicio:string;
	fechaFinServicio:string;
	observacion:string;
	ciudadOrigen:string;
	ciudadDestino:string;
	direccionOrigenServicio:string;
	direccionDestinoServicio:string;
	estadoEliminado:boolean;
	Cliente_idCliente:number;
	Vehiculo_idVehiculo:number;
	Orden_idOrden:number;
    Estado_idEstadoOrden:number;
}
