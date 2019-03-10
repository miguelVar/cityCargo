const ibmdb = require("ibm_db");

let connStr = require('../config/database');
const tipoVehiculoCtrl = {};

// Método que lista tipo vehiculo
tipoVehiculoCtrl.getTipoVehiculo = (req, res) => {

    var query = 'SELECT * FROM TipoVehiculo';

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: data })

            conn.close(function () {
                console.log('done Listar tipo vehiculo');
            });
        });
    });

}

//Método para crear tipo vehiculo
tipoVehiculoCtrl.createTipoVehiculo = (req, res) => {

    let nombreTipo = req.body.nombreTipo;
    let descripcionTipo = req.body.descripcionTipo;
    let estadoEliminado = req.body.estadoEliminado || false;

    var query = `INSERT INTO TipoVehiculo (nombreTipo, descripcionTipo, estadoEliminado) VALUES ('${nombreTipo}', '${descripcionTipo}', '${estadoEliminado}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: data })

            conn.close(function () {
                console.log('done crear tipo vehiculo');
            });
        });
    });

}

//Método para editar tipo vehiculo
tipoVehiculoCtrl.updateTipoVehiculo = (req, res) => {

    let idTipoVehiculo = req.params.idTipoVehiculo;
    let nombreTipo = req.body.nombreTipo;
    let descripcionTipo = req.body.descripcionTipo;

    var query = `UPDATE TipoVehiculo SET nombreTipo = '${nombreTipo}', descripcionTipo = '${descripcionTipo}' WHERE idTipoVehiculo = '${idTipoVehiculo}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: data })

            conn.close(function () {
                console.log('done Listar tipo vehiculo');
            });
        });
    }); 

}

//Método para eliminar tipo vehiculo
tipoVehiculoCtrl.deleteTipoVehiculo = (req, res) => {

    let idTipoVehiculo = req.params.idTipoVehiculo;

    var query = `DELETE FROM TipoVehiculo WHERE idTipoVehiculo = '${idTipoVehiculo}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({ data: data })

            conn.close(function () {
                console.log('done elimina tipo vehiculo');
            });
        });
    }); 

}

module.exports = tipoVehiculoCtrl;