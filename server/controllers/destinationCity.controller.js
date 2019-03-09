const ibmdb = require('ibm_db');
let connStr = require("../config/database");
const destinationCity= {};


// se encarga de crear las ciudades detino
destinationCity.createDestinationCity = (req, res) => {
    let nombreCiudadDestino=req.body.nombreCiudadDestino;
    let descripcionCiudadDestino=req.body.descripcionCiudadDestino;
    let direccionCiudadDestino=req.body.direccionCiudadDestino;

    var query = `INSERT INTO CiudadDestino (nombreCiudadDestino, descripcionCiudadDDestino, direccionCiudadDestino) VALUES ('${nombreCiudadDestino}','${descripcionCiudadDestino}','${direccionCiudadDestino}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'Se creo satisfactoriamente la ciudad destino'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}


// se encarga de traer todas las ciudades destno que existen en la bd
destinationCity.getDestinationCity = (req, res) => {

    var query = `SELECT * FROM CiudadDestino`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json(data);
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}


// se encarga de actulizar una ciudad destino a partir de un id pasado por url
destinationCity.updateDestinationCity = (req, res) => {

    let idCity=req.params.id;
    let nombreCiudadDestino=req.body.nombreCiudadDestino;
    let descripcionCiudadDestino=req.body.descripcionCiudadDestino;
    let direccionCiudadDestino=req.body.direccionCiudadDestino;

    var query = `UPDATE CiudadDestino SET nombreCiudadDestino='${nombreCiudadDestino}', descripcionCiudadDDestino='${descripcionCiudadDestino}', direccionCiudadDestino='${direccionCiudadDestino}' WHERE idCiudadDestino='${idCity}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data: 'La ciudad se Actualizo de manera Satisfactoria'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}





module.exports=destinationCity;