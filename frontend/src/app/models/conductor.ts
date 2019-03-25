export class Conductor {

    constructor(idConductor = 0, nombreConductor = '', celularConductor = '', estadoEliminado = false) {

        idConductor = idConductor;
        nombreConductor = nombreConductor;
        celularConductor = celularConductor;
        estadoEliminado = estadoEliminado;

    }

    idConductor: number;
    nombreConductor: string;
    celularConductor: string;
    estadoEliminado: string;

}
