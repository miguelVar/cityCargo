export class Clients {

    constructor(idcliente=0,nombreCliente='', celularCliente='', direccionCliente=''){
        this.idCliente=idcliente;
        this.nombreCliente=nombreCliente;
        this.celularCliente=celularCliente;
        this.direccionCliente=direccionCliente;
    }
    idCliente:number;
    nombreCliente:string;
    celularCliente:string;
    direccionCliente:string;
}
