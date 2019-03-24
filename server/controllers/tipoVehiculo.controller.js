// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const tipoVehiculoCtrl = {};

// Método que lista tipo vehiculo
tipoVehiculoCtrl.getTipoVehiculo = (req, res) => {

    var query = 'SELECT * FROM TipoVehiculo';

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done lista tipo vehiculo');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done Listar tipo vehiculo');
    //         });
    //     });
    // });

}

//Método para crear tipo vehiculo
tipoVehiculoCtrl.createTipoVehiculo = (req, res) => {

    let nombreTipo = req.body.nombreTipo;
    let descripcionTipo = req.body.descripcionTipo;
    let estadoEliminado = req.body.estadoEliminado || false;

    var query = `INSERT INTO TipoVehiculo (nombreTipo, descripcionTipo, estadoEliminado) VALUES ('${nombreTipo}', '${descripcionTipo}', '${estadoEliminado}')`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done crea tipo vehiculo');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done crear tipo vehiculo');
    //         });
    //     });
    // });

}

//Método para editar tipo vehiculo
tipoVehiculoCtrl.updateTipoVehiculo = (req, res) => {

    let idTipoVehiculo = req.params.idTipoVehiculo;
    let nombreTipo = req.body.nombreTipo;
    let descripcionTipo = req.body.descripcionTipo;

    var query = `UPDATE TipoVehiculo SET nombreTipo = '${nombreTipo}', descripcionTipo = '${descripcionTipo}' WHERE idTipoVehiculo = '${idTipoVehiculo}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done actualiza tipo vehiculo');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done Listar tipo vehiculo');
    //         });
    //     });
    // });

}

//Método para eliminar tipo vehiculo
tipoVehiculoCtrl.deleteTipoVehiculo = (req, res) => {

    let idTipoVehiculo = req.params.idTipoVehiculo;

    var query = `DELETE FROM TipoVehiculo WHERE idTipoVehiculo = '${idTipoVehiculo}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done elimina tipo vehiculo');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done elimina tipo vehiculo');
    //         });
    //     });
    // });

}

module.exports = tipoVehiculoCtrl;