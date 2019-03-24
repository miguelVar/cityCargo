// const ibmdb = require('ibm_db');
// let connStr = require("../config/database");
const clients = {};






// se encarga de crear el cliente 
clients.createClient = (req, res) => {
    let nombreCliente=req.body.nombreCliente;
    let celularCliente=req.body.celularCliente;
    let direccionCliente=req.body.direccionCliente;
    let estadoEliminado=req.body.estadoEliminado || false;

    var query = `INSERT INTO Cliente (nombreCliente, celularCliente, direccionCliente, estadoEliminado) VALUES ('${nombreCliente}','${celularCliente}','${direccionCliente}','${estadoEliminado}')`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'El cliente se creo satisfactoriamente'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}


// se encarga de listar todos los clientes 
clients.getClient = (req, res) => {

    var query = `SELECT * FROM Cliente`;

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


// se encarga de actualizar el cliente 
clients.updateClient = (req, res) => {
    let idClient=req.params.id;
    let nombreCliente=req.body.nombreCliente;
    let celularCliente=req.body.celularCliente;
    let direccionCliente=req.body.direccionCliente;
    let estadoEliminado=req.body.estadoEliminado || false;

    var query = `UPDATE Cliente set nombreCliente='${nombreCliente}', celularCliente='${celularCliente}', direccionCliente='${direccionCliente}', estadoEliminado='${estadoEliminado}' WHERE idCliente='${idClient}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'El cliente se actualizo satisfactoriamente'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}


// se encarga de eliminar un cliente fisicamente
clients.deleteClient = (req, res) => {
    let idClient=req.params.id;

    var query = `DELETE FROM Cliente WHERE idcliente='${idClient}'`;

    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'Se elimino Satisfactoriamente'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}

// se encarga de eliminar un cliente logicamente
clients.deleteLogicClient = (req, res) => {
    let idClient=req.params.id;
    let estadoEliminado=req.body.estadoEliminado==0?1:0;

    var query = `UPDATE Cliente SET  estadoEliminado='${estadoEliminado}' WHERE idcliente='${idClient}'`;

    
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(query, function (err, data) {
            if (err) res.json({ error: err })
            else res.json({data:'Se elimino Satisfactoriamente'});
            conn.close(function () {
                console.log('done Listar Clientes');
            });
        });
    });
}





module.exports=clients;