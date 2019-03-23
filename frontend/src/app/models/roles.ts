export class Rol {

    constructor(CORREO='',ESTADOELIMINADO=false,ID_ROL=0,ID_USUARIO=0,NOMBRE_ROL='',NOMBRE_USUARIO='',PASSWORD=''){
        this.CORREO=CORREO;
        this.ESTADOELIMINADO=ESTADOELIMINADO;
        this.ID_ROL=ID_ROL;
        this.ID_USUARIO=ID_USUARIO;
        this.NOMBRE_ROL=NOMBRE_ROL;
        this.NOMBRE_USUARIO=NOMBRE_USUARIO;
        this.PASSWORD=PASSWORD;
    }
    
    CORREO:string;
    ESTADOELIMINADO:boolean;
    ID_ROL:number;
    ID_USUARIO:number;
    NOMBRE_ROL:string;
    NOMBRE_USUARIO:string;
    PASSWORD:string;


}
