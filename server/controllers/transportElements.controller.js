const ibmdb = require('ibm_db');
let connStr = require("../config/database");
const transportElement = {};


// se encarga de crear los elementos a transportar
transportElement.createTransportElement = (req, res) => {
    let nombreElemento=req.body.nombreElemento;
    let cantidadElemento=req.body.cantidadElemento;
    let Servicio_idServicio=req.body.Servicio_idServicio;

    var query = `INSERT INTO ElementosTransporte (nombreElemento, cantidadElemento, Servicio_idServicio) VALUES ('${nombreElemento}','${cantidadElemento}','${Servicio_idServicio}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'Se creo el elemento de manera satisfactoria'})
            conn.close(function () {
                console.log('done Listar elementos a transportar');
            });
        });
    });
}



// se encarga de listar los elementos a transportar
transportElement.getTransportElement = (req, res) => {

    var query = `SELECT * FROM ElementosTransporte`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json(data)
            conn.close(function () {
                console.log('done Listar elementos a transportar');
            });
        });
    });
}




module.exports=transportElement;


