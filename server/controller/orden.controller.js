const ibmdb = require("ibm_db");

let connStr = require('../config/database');
const ordenCtrl = {};

// Método usado para cargar las ordenes
ordenCtrl.getOrden = (req, res) => {

    console.log(req);

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

    let numeroOrden = req.body.numeroOrden;
    let descripcionOrden = req.body.descripcionOrden;

    var query = `INSERT INTO orden (numeroOrden, descripcionOrden, Estado_idEstadoOrden) VALUES('${numeroOrden}', '${descripcionOrden}', 1)`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: 'Se creo la orden de manera satisfactoria!!!' })

            conn.close(function () {
                console.log('done Listar Orden');
            });
        });
    });

}

//Método para actualizar una orden
ordenCtrl.updateOrden = (req, res) => {

    let idOrden = parseInt(req.params.idOrden);
    let numeroOrden = req.body.numeroOrden;
    let descripcionOrden = req.body.descripcionOrden;

    var query = `UPDATE Orden SET numeroOrden = '${numeroOrden}', descripcionOrden = '${descripcionOrden}' WHERE idOrden = '${idOrden}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: 'Se actualizo la orden de manera satisfactoria!!!' })

            conn.close(function () {
                console.log('done Actualiza Orden');
            });
        });
    });

}

// Método para eliminar orden
ordenCtrl.deleteOrden = (req, res) => {

    let idOrden = parseInt(req.params.idOrden);

    var query = `DELETE FROM Orden WHERE idOrden = '${idOrden}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: 'Se elimino la orden de manera satisfactoria!!!' })

            conn.close(function () {
                console.log('done elimino Orden');
            });
        });
    });

}

module.exports = ordenCtrl;