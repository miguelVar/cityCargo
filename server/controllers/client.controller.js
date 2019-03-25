// const ibmdb = require('ibm_db');
// let connStr = require("../config/database");
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();
const clients = {};

// se encarga de crear el cliente 
clients.createClient = (req, res) => {
    console.log("data",req.body);
    let nombreCliente = req.body.nombreCliente;
    let celularCliente = req.body.celularCliente;
    let direccionCliente = req.body.direccionCliente;
    let estadoEliminado = req.body.estadoEliminado || false;

    var query = `INSERT INTO Cliente (nombreCliente, celularCliente, direccionCliente, estadoEliminado) VALUES ('${nombreCliente}','${celularCliente}','${direccionCliente}','${estadoEliminado}')`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json({results:'El cliente se creo de manera satisfactoria'});
        console.log('Done Crea cientes');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({data:'El cliente se creo satisfactoriamente'});
    //         conn.close(function () {
    //             console.log('done Crea Clientes');
    //         });
    //     });
    // });
}


// se encarga de listar todos los clientes 
clients.getClient = (req, res) => {

    var query = `SELECT * FROM Cliente`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done lista cientes');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json(data);
    //         conn.close(function () {
    //             console.log('done Listar Clientes');
    //         });
    //     });
    // });
}


// se encarga de actualizar el cliente 
clients.updateClient = (req, res) => {
    let idClient = req.params.id;
    let nombreCliente = req.body.nombreCliente;
    let celularCliente = req.body.celularCliente;
    let direccionCliente = req.body.direccionCliente;
    let estadoEliminado = req.body.estadoEliminado || false;

    var query = `UPDATE Cliente set nombreCliente='${nombreCliente}', celularCliente='${celularCliente}', direccionCliente='${direccionCliente}', estadoEliminado='${estadoEliminado}' WHERE idCliente='${idClient}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Update cientes');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'El cliente se actualizo satisfactoriamente' });
    //         conn.close(function () {
    //             console.log('done Listar Clientes');
    //         });
    //     });
    // });
}


// se encarga de eliminar un cliente fisicamente
clients.deleteClient = (req, res) => {
    let idClient = req.params.id;

    var query = `DELETE FROM Cliente WHERE idcliente='${idClient}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Elimina cientes');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se elimino Satisfactoriamente' });
    //         conn.close(function () {
    //             console.log('done Listar Clientes');
    //         });
    //     });
    // });
}

// se encarga de eliminar un cliente logicamente
clients.deleteLogicClient = (req, res) => {
    let idClient = req.params.id;
    let estadoEliminado = req.body.estadoEliminado == 0 ? 1 : 0;

    var query = `UPDATE Cliente SET  estadoEliminado='${estadoEliminado}' WHERE idcliente='${idClient}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Elimina Logico cientes');

    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se elimino Satisfactoriamente' });
    //         conn.close(function () {
    //             console.log('done Listar Clientes');
    //         });
    //     });
    // });
}





module.exports = clients;