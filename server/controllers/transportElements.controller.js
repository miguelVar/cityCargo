const ibmdb = require('ibm_db');
let connStr = require("../config/database");
const transportElement = {};


// se encarga de crear los elementos a transportar
transportElement.createTransportElement = (req, res) => {
    let nombreElemento=req.body.nombreElemento;
    let descripcionElemento=req.body.descripcionElemento;
    let cantidadElemento=req.body.cantidadElemento;
    let Servicio_idServicio=req.body.Servicio_idServicio;

    var query = `INSERT INTO ElementosTransporte (nombreElemento, descripcionElemento, cantidadElemento, Servicio_idServicio) VALUES ('${nombreElemento}','${descripcionElemento}','${cantidadElemento}','${Servicio_idServicio}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json(data)
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}


module.exports=transportElement;


