export class Vehiculo {

    constructor(idVehiculo = 0, placaVehiculo = '', descripcionVehiculo = '', TipoVehiculo_idTipoVehiculo = '') {

        this.idVehiculo = idVehiculo;
        this.placaVehiculo = placaVehiculo;
        this.descripcionVehiculo = descripcionVehiculo;
        this.estadoEliminado = this.estadoEliminado;

    }

    idVehiculo: number;
    placaVehiculo: string;
    descripcionVehiculo: string;
    TipoVehiculo_idTipoVehiculo: number;
    estadoEliminado: boolean;

}
