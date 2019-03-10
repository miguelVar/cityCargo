const ibmdb = require('ibm_db');
let connStr = require("../config/database");
const serviceCityCargo = {};




// se encarga de crear el servicio

serviceCityCargo.createServiceCityCargo=(req,res)=>{

    let nombreServicio=req.body.nombreServicio;
    let descripcionServicio=req.body.descripcionServicio;
    let valorServicio=req.body.valorServicio;
    let horaInicioServicio=req.body.horaInicioServicio;
    let horaFinServicio=req.body.horaFinServicio;
    let fechaInicioServicio=req.body.fechaInicioServicio;
    let fechaFinServicio=req.body.fechaFinServicio;
    let observacion=req.body.observacion;
    let ciudadOrigen=req.body.ciudadOrigen;
    let ciudadDestino=req.body.ciudadDestino;
    let direccionOrigenServicio=req.body.direccionOrigenServicio;
    let direccionDestinoServicio=req.body.direccionDestinoServicio;
    let estadoEliminado=req.body.estadoEliminado;
    let Cliente_idCliente=req.body.Cliente_idCliente;
    let Vehiculo_idVehiculo=req.body.Vehiculo_idVehiculo;
    let Orden_idOrden=req.body.Orden_idOrden;
    let Estado_idEstadoOrden=req.body.Estado_idEstadoOrden;

    var query = `INSERT INTO Servicio (nombreServicio, descripcionServicio, valorServicio, horaInicioServicio, horaFinServicio,fechaInicioServicio, fechaFinServicio,observacion,ciudadOrigen,ciudadDestino, direccionOrigenServicio,direccionDestinoServicio, estadoEliminado,Cliente_idCliente,Vehiculo_idVehiculo,Orden_idOrden,Estado_idEstadoOrden) VALUES ('${nombreServicio}','${descripcionServicio}','${valorServicio}','${horaInicioServicio}','${horaFinServicio}','${fechaInicioServicio}','${fechaFinServicio}','${observacion}','${ciudadOrigen}','${ciudadDestino}','${direccionOrigenServicio}','${direccionDestinoServicio}','${estadoEliminado}','${Cliente_idCliente}','${Vehiculo_idVehiculo}','${Orden_idOrden}','${Estado_idEstadoOrden}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'El servicio se creo satisfactoriamente'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });

}




module.exports=serviceCityCargo;