export class Orden {

    constructor(idOrden = 0, numeroOrden = '', descripcionOrden = '', Estado_idEstadoOrden = 0) {

        idOrden = idOrden;
        numeroOrden = numeroOrden;
        descripcionOrden = descripcionOrden;
        Estado_idEstadoOrden = Estado_idEstadoOrden;

    }

    idOrden: number;
    numeroOrden: string;
    descripcionOrden: string;
    Estado_idEstadoOrden: number;

}
