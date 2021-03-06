// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const conductorCtrl = {};

//Método para cargar conductores
conductorCtrl.getConductor = (req, res) => {

    var query = 'SELECT * FROM Conductor WHERE estadoEliminado = 0';

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Lista conductor');
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

conductorCtrl.getCountCel = (req, res) => {

    let numcel=req.params.id;

    var query = `SELECT COUNT(*) as num FROM Conductor WHERE celularConductor='${numcel}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Lista conductor');
    });

}

//Método para cargar conductores eliminados logicamente
conductorCtrl.getConductorEliminado = (req, res) => {

    var query = 'SELECT * FROM Conductor WHERE estadoEliminado = 1';

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Lista conductor');
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
    // let estadoEliminado = req.body.estadoEliminado || false;

    var query = `INSERT INTO Conductor (nombreConductor, celularConductor, estadoEliminado) VALUES('${nombreConductor}', '${celularConductor}',0)`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json({ results: 'conductor creado' });
        console.log('Done Crea conductor');

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

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done actualiza conductor');
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
    console.log("sdfsfdsfdds", req.params.idConductor);

    var query = `UPDATE Conductor SET estadoEliminado = 1 WHERE idConductor = '${idConductor}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina logico conductor');
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

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done restaura logico conductor');

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

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimian fisico conductor');
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