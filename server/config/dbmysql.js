var mysql = require('mysql');

var dbconnection =()=>{
    return mysql.createConnection({

    host :'localhost',
    user : 'root',
    password : '',
    database : 'dbgestorcitycargo'

    });
}

const connection = dbconnection();

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
    if(error) throw error;
    console.log('Se conecto a la DB!!!.. -->', results[0].solution);
});
connection.end();

module.exports = dbconnection;