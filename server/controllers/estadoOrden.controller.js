// const ibmdb = require("ibm_db");
// let connStr = require('../config/database');
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();

const estadoOrdenCtrl = {};

// Método que lista estado orden
estadoOrdenCtrl.getEstadoOrden = (req, res) => {

    var query = 'SELECT * FROM estado';

    connection.query(query, function (error, results) {
        if (error) throw res.json({ errorinfo: error });
        else res.json(results);
        console.log('Done lista estado orden');
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

module.exports = estadoOrdenCtrl