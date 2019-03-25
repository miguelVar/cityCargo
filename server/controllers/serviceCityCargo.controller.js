// const ibmdb = require('ibm_db');
// let connStr = require("../config/database");
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const serviceCityCargo = {};

// se encarga de crear el servicio

serviceCityCargo.createServiceCityCargo = (req, res) => {

    let nombreServicio = req.body.nombreServicio;
    let descripcionServicio = req.body.descripcionServicio;
    let valorServicio = req.body.valorServicio;
    let horaInicioServicio = req.body.horaInicioServicio;
    let horaFinServicio = req.body.horaFinServicio;
    let fechaInicioServicio = req.body.fechaInicioServicio;
    let fechaFinServicio = req.body.fechaFinServicio;
    let observacion = req.body.observacion;
    let ciudadOrigen = req.body.ciudadOrigen;
    let ciudadDestino = req.body.ciudadDestino;
    let direccionOrigenServicio = req.body.direccionOrigenServicio;
    let direccionDestinoServicio = req.body.direccionDestinoServicio;
    let estadoEliminado = req.body.estadoEliminado;
    let Cliente_idCliente = req.body.Cliente_idCliente;
    let Vehiculo_idVehiculo = req.body.Vehiculo_idVehiculo;
    let Orden_idOrden = req.body.Orden_idOrden;
    let Estado_idEstadoOrden = req.body.Estado_idEstadoOrden;

    var query = `INSERT INTO Servicio (nombreServicio, descripcionServicio, valorServicio, horaInicioServicio, horaFinServicio,fechaInicioServicio, fechaFinServicio,observacion,ciudadOrigen,ciudadDestino, direccionOrigenServicio,direccionDestinoServicio, estadoEliminado,Cliente_idCliente,Vehiculo_idVehiculo,Orden_idOrden,Estado_idEstadoOrden) VALUES ('${nombreServicio}','${descripcionServicio}','${valorServicio}','${horaInicioServicio}','${horaFinServicio}','${fechaInicioServicio}','${fechaFinServicio}','${observacion}','${ciudadOrigen}','${ciudadDestino}','${direccionOrigenServicio}','${direccionDestinoServicio}','${estadoEliminado}','${Cliente_idCliente}','${Vehiculo_idVehiculo}','${Orden_idOrden}','${Estado_idEstadoOrden}')`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json({results:'Servicio agregado'});
        console.log('Done agrega servicio');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({data:'El servicio se creo satisfactoriamente'});
    //         conn.close(function () {
    //             console.log('done Listar Servicios');
    //         });
    //     });
    // });

}


// se encarga de listar todos los servicios

serviceCityCargo.getServiceCityCargo = (req, res) => {

    var query = `SELECT * FROM Servicio`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done Lista servicio');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json(data);
    //         conn.close(function () {
    //             console.log('done Listar servicios');
    //         });
    //     });
    // });

}



// se encarga de actualizar el servicio

serviceCityCargo.updateServiceCityCargo = (req, res) => {

    let idService = req.params.id;

    let nombreServicio = req.body.nombreServicio;
    let descripcionServicio = req.body.descripcionServicio;
    let valorServicio = req.body.valorServicio;
    let horaInicioServicio = req.body.horaInicioServicio;
    let horaFinServicio = req.body.horaFinServicio;
    let fechaInicioServicio = req.body.fechaInicioServicio;
    let fechaFinServicio = req.body.fechaFinServicio;
    let observacion = req.body.observacion;
    let ciudadOrigen = req.body.ciudadOrigen;
    let ciudadDestino = req.body.ciudadDestino;
    let direccionOrigenServicio = req.body.direccionOrigenServicio;
    let direccionDestinoServicio = req.body.direccionDestinoServicio;
    let estadoEliminado = req.body.estadoEliminado;
    let Cliente_idCliente = req.body.Cliente_idCliente;
    let Vehiculo_idVehiculo = req.body.Vehiculo_idVehiculo;
    let Orden_idOrden = req.body.Orden_idOrden;
    let Estado_idEstadoOrden = req.body.Estado_idEstadoOrden;

    var query = `UPDATE Servicio SET nombreServicio='${nombreServicio}'
        , descripcionServicio='${descripcionServicio}'
        , valorServicio='${valorServicio}'
        , horaInicioServicio='${horaInicioServicio}'
        , horaFinServicio='${horaFinServicio}'
        ,fechaInicioServicio='${fechaInicioServicio}'
        , fechaFinServicio='${fechaFinServicio}'
        ,observacion='${observacion}'
        ,ciudadOrigen='${ciudadOrigen}'
        ,ciudadDestino='${ciudadDestino}'
        , direccionOrigenServicio='${direccionOrigenServicio}'
        ,direccionDestinoServicio='${direccionDestinoServicio}'
        , estadoEliminado='${estadoEliminado}'
        ,Cliente_idCliente='${Cliente_idCliente}'
        ,Vehiculo_idVehiculo='${Vehiculo_idVehiculo}'
        ,Orden_idOrden='${Orden_idOrden}'
        ,Estado_idEstadoOrden='${Estado_idEstadoOrden}' WHERE idServicio ='${idService}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done actualiza servicio');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'El servicio se actualizo satisfactoriamente' });
    //         conn.close(function () {
    //             console.log('done Listar Servicios');
    //         });
    //     });
    // });

}


// se encarga de eliminar fisicamente un servicio

serviceCityCargo.deleteServiceCityCargo = (req, res) => {

    let idServiciio = req.params.id;

    var query = `DELETE FROM Servicio WHERE idServicio='${idServiciio}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina fisico servicio');
    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se elimino el servicio de manera satisfactoria!!!' });
    //         conn.close(function () {
    //             console.log('done Listar servicios');
    //         });
    //     });
    // });

}


// se encarga de eliminar logica un servicio

serviceCityCargo.deletelogicServiceCityCargo = (req, res) => {

    let idServiciio = req.params.id;
    let estadoEliminado = req.body.estadoEliminado == 0 ? 1 : 0;

    var query = `UPDATE Servicio SET estadoEliminado='${estadoEliminado}' WHERE idServicio='${idServiciio}'`;

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done elimina logico servicio');

    });

    // ibmdb.open(connStr, function (err, conn) {
    //     if (err) return console.log(err);

    //     conn.query(query, function (err, data) {
    //         if (err) res.json({ error: err })
    //         else res.json({ data: 'Se actualizo el estado del servicio de manera satisfactoria!!!' });
    //         conn.close(function () {
    //             console.log('done Listar servicios');
    //         });
    //     });
    // });

}


module.exports = serviceCityCargo;