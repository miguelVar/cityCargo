// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const transportElement = {};


// se encarga de crear los elementos a transportar
transportElement.createTransportElement = (req, res) => {
    let nombreElemento = req.body.nombreElemento;
    let cantidadElemento = req.body.cantidadElemento;
    let Servicio_idServicio = req.body.Servicio_idServicio;

    var query = `INSERT INTO ElementosTransporte (nombreElemento, cantidadElemento, Servicio_idServicio) VALUES ('${nombreElemento}','${cantidadElemento}','${Servicio_idServicio}')`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done crea elementos transporte');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({data:'Se creo el elemento de manera satisfactoria'})
    //         conn.close(function () {
    //             console.log('done Listar elementos a transportar');
    //         });
    //     });
    // });
}



// se encarga de listar los elementos a transportar
transportElement.getTransportElement = (req, res) => {

    var query = `SELECT * FROM ElementosTransporte`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done lista elementos transporte');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json(data)
    //         conn.close(function () {
    //             console.log('done Listar elementos a transportar');
    //         });
    //     });
    // });
}


// se encarga de actualizar un elemento a transportar
transportElement.updateTransportElement = (req, res) => {
    let idElemento = req.params.id;
    let nombreElemento = req.body.nombreElemento;
    let cantidadElemento = req.body.cantidadElemento;
    let Servicio_idServicio = req.body.Servicio_idServicio;

    var query = `UPDATE ElementosTransporte SET nombreElemento='${nombreElemento}'
    , cantidadElemento='${cantidadElemento}'
    , Servicio_idServicio='${Servicio_idServicio}' WHERE idElementosTransporte='${idElemento}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done actualiza elementos transporte');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se actualizo el elemento de manera satisfactoria' })
    //         conn.close(function () {
    //             console.log('done Listar elementos a transportar');
    //         });
    //     });
    // });
}


// se encarga de eliminar un  elemento a transportar de manera fisica
transportElement.deleteTransportElement = (req, res) => {

    let idElemento = req.params.id;
    var query = `DELETE FROM ElementosTransporte WHERE idElementosTransporte='${idElemento}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina elementos transporte');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se elimino el elemento a transportar de manera satisfactoria' });
    //         conn.close(function () {
    //             console.log('done Listar elementos a transportar');
    //         });
    //     });
    // });
}



module.exports = transportElement;


