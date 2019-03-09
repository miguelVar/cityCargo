const ibmdb = require("ibm_db");

let connStr = require('../config/database');
const ordenCtrl = {};

// Método usado para cargar las ordenes
ordenCtrl.getOrden = (req, res) => {

    var query = `SELECT * FROM orden`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: data })

            conn.close(function () {
                console.log('done Listar Orden');
            });
        });
    });

}

// Método encargado de crear ordenes
ordenCtrl.createOrden = (req, res) => {

    let numeroOrden = req.body.NUMERO_ORDEN;
    let descripcionOrden = req.body.DESCRIPCION_ORDEN;

    var query = `INSERT INTO orden (numeroOrden, descripcionOrden, Estado_idEstadoOrden) VALUES('${numeroOrden}', '${descripcionOrden}', 1)`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: 'Se creo la orden de manera satisfactoria!!!' })

            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });

}

module.exports = ordenCtrl;