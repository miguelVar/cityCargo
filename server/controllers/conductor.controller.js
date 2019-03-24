// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const conductorCtrl = {};

//Método para cargar conductores
conductorCtrl.getConductor = (req, res) => {

    var query = 'SELECT * FROM Conductor';

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done Lista conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done Listar conductor');
    //         });
    //     });
    // });

}

//Método para crear conductor
conductorCtrl.createConductor = (req, res) => {

    let nombreConductor = req.body.nombreConductor;
    let celularConductor = req.body.celularConductor;
    let estadoEliminado = req.body.estadoEliminado || false;

    console.log(req.body);

    var query = `INSERT INTO Conductor (nombreConductor, celularConductor, estadoEliminado) VALUES('${nombreConductor}', '${celularConductor}', '${estadoEliminado}')`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done Crea conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done crear conductor');
    //         });
    //     });
    // });

}

//Método para editar conductor
conductorCtrl.updateConductor = (req, res) => {

    let idConductor = req.params.idConductor;
    let nombreConductor = req.body.nombreConductor;
    let celularConductor = req.body.celularConductor;

    var query = `UPDATE Conductor SET nombreConductor = '${nombreConductor}', celularConductor = '${celularConductor}', estadoEliminado = 0 WHERE idConductor = '${idConductor}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done actualiza conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done actualiza conductor');
    //         });
    //     });
    // });

}

//Método para eliminar logico conductor
conductorCtrl.deleteLogicoConductor = (req, res) => {

    let idConductor = parseInt(req.params.idConductor);

    var query = `UPDATE Conductor SET estadoEliminado = 1 WHERE idConductor = '${idConductor}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done elimina logico conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done elimina logico conductor');
    //         });
    //     });
    // });

}

//Método para restaurar logico conductor
conductorCtrl.restauraLogicoConductor = (req, res) => {

    let idConductor = parseInt(req.params.idConductor);

    var query = `UPDATE Conductor SET estadoEliminado = 0 WHERE idConductor = '${idConductor}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done restaura logico conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done restaura logico conductor');
    //         });
    //     });
    // });

}

//Método para eliminar fisico conductor
conductorCtrl.eliminaFisicoConductor = (req, res) => {

    let idConductor = parseInt(req.params.idConductor);

    var query = `DELETE FROM Conductor WHERE idConductor = '${idConductor}'`;

    connection.connect();

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        connection.end(function () {
            console.log('Done elimian fisico conductor');
        });
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: data })

    //         conn.close(function () {
    //             console.log('done elimina fisico conductor');
    //         });
    //     });
    // });

}

module.exports = conductorCtrl;