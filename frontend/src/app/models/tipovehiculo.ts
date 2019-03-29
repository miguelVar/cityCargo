export class Tipovehiculo {

    constructor(idTipoVehiculo = 0, nombreTipo = '', descripcionTipo = '', estadoEliminado = false) {

        this.idTipoVehiculo = idTipoVehiculo;
        this.nombreTipo = nombreTipo;
        this.descripcionTipo = descripcionTipo;
        this.estadoEliminado = estadoEliminado;

    }

    idTipoVehiculo: number;
    nombreTipo: string;
    descripcionTipo: string;
    estadoEliminado: boolean;

}
