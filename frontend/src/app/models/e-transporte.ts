export class ETransporte {

    constructor( idElementosTransporte=0,nombreElemento='',cantidadElemento=0,Servicio_idServicio=0){
        this.idElementosTransporte=idElementosTransporte;
        this.nombreElemento=nombreElemento;
        this.cantidadElemento=cantidadElemento;
        this.Servicio_idServicio=Servicio_idServicio;

    }

    idElementosTransporte:number;
    nombreElemento:string;
    cantidadElemento:number;
    Servicio_idServicio:number;

}
