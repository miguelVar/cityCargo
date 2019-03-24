import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Clients {

    constructor(NOMBRE_CLIENTE='', CELULAR_CLIENTE='', DIRECCION_CLIENTE=''){
        this.NOMBRE_CLIENTE=NOMBRE_CLIENTE;
        this.CELULAR_CLIENTE=CELULAR_CLIENTE;
        this.DIRECCION_CLIENTE=DIRECCION_CLIENTE;
    }

    NOMBRE_CLIENTE:string;
    CELULAR_CLIENTE:string;
    DIRECCION_CLIENTE:string;
}
