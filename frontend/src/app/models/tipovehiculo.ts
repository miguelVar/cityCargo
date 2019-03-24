export class Tipovehiculo {

    constructor(nombreTipo = '', descripcionTipo = '', estadoEliminado = false) {
        this.nombreTipo = nombreTipo;
        this.descipcionTipo = descripcionTipo;
        this.estadoEliminado = estadoEliminado;
    }

    nombreTipo: string;
    descipcionTipo: string;
    estadoEliminado: boolean;

}
