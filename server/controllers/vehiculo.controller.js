// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const vehiculoCtrl = {};

// Método para cargar los vehiculos
vehiculoCtrl.getVehiculo = (req, res) => {

    var query = 'SELECT * FROM Vehiculo';

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done lista vehiculo');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done Listar vehiculo');
    //         });
    //     });
    // });

}

// Método para crear vehiculo
vehiculoCtrl.createVehiculo = (req, res) => {

    let placaVehiculo = req.body.placaVehiculo;
    let descripcionVehiculo = req.body.descripcionVehiculo;
    let TipoVehiculo_idTipoVehiculo = parseInt(req.body.TipoVehiculo_idTipoVehiculo);
    let estadoEliminado = req.body.estadoEliminado || false;

    var query = `INSERT INTO Vehiculo (placaVehiculo, descripcionVehiculo, TipoVehiculo_idTipoVehiculo, estadoEliminado) VALUES('${placaVehiculo}', '${descripcionVehiculo}', '${TipoVehiculo_idTipoVehiculo}', '${estadoEliminado}')`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done crea vehiculo');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done crear vehiculo');
    //             console.log(res);
    //         });
    //     });
    // });

}

//Método para actualizar vehiculo
vehiculoCtrl.updateVehiculo = (req, res) => {

    let idVehiculo = req.params.idVehiculo;
    let placaVehiculo = req.body.placaVehiculo;
    let descripcionVehiculo = req.body.descripcionVehiculo;
    let TipoVehiculo_idTipoVehiculo = parseInt(req.body.TipoVehiculo_idTipoVehiculo);

    var query = `UPDATE Vehiculo SET placaVehiculo = '${placaVehiculo}', descripcionVehiculo = '${descripcionVehiculo}', TipoVehiculo_idTipoVehiculo = '${TipoVehiculo_idTipoVehiculo}' WHERE idVehiculo = '${idVehiculo}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done actualiza vehiculo');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done actualiza vehiculo');
    //             console.log(res);
    //         });
    //     });
    // });

}

// Método para eliminar logicamente vehiculo
vehiculoCtrl.deleteVehiculoLogico = (req, res) => {

    let idVehiculo = parseInt(req.params.idVehiculo);

    var query = `UPDATE Vehiculo SET estadoEliminado = 1 WHERE idVehiculo = '${idVehiculo}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina logico vehiculo');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done eliminar logico vehiculo');
    //             console.log(res);
    //         });
    //     });
    // });

}

//Método para restaurar logico vehiculo
vehiculoCtrl.restauraLogicoVehiculo = (req, res) => {

    let idVehiculo = parseInt(req.params.idVehiculo);

    var query = `UPDATE Vehiculo SET estadoEliminado = 0 WHERE idVehiculo = '${idVehiculo}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done retaura vehiculo');

    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done eliminar logico vehiculo');
    //             console.log(res);
    //         });
    //     });
    // });

}

//Método para eliminar fisico vehiculo
vehiculoCtrl.deleteVehiculoFisico = (req, res) => {

    let idVehiculo = parseInt(req.params.idVehiculo);

    var query = `DELETE FROM Vehiculo WHERE idVehiculo = '${idVehiculo}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina vehiculo');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done eliminar fisico vehiculo');
    //             console.log(res);
    //         });
    //     });
    // });

}

module.exports = vehiculoCtrl;