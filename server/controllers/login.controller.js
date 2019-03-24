const loginCtrl = {}

var express = require('express');
// var ibmdb = require("ibm_db")
// let connStr = require("../config/database")
const dbconnection = require('../config/dbmysql');
const connection = dbconnection();
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../models/config');


// Metodo encargado de listar todos los usuarios
loginCtrl.obtenerUsuarios = (req, res) => {

  var query = `SELECT * FROM Usuario`;

  connection.connect();

  connection.query(query, function (error, results) {
    if (error) throw res.json({ errorinfo: error });
    else res.json(results);
    connection.end(function () {
      console.log('Lista Usuarios ok');
    });
  });

  // ibmdb.open(connStr, (err, conn) => {

  //   conn.query("SELECT * FROM Usuario", (err, data) => {
  //     if (err) {
  //       res.json({ error: err })
  //       console.log("Hubo un error en la busqueda" + err);
  //     }
  //     else {
  //       conn.close(() => {
  //         console.log("Se ha cerrado la base de datos")
  //       })
  //       res.json({ data: data })
  //     }
  //   })
  // })
}

loginCtrl.logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
}

//auntenticacion

loginCtrl.authentication = (req, res) => {
  console.log("AQUI", req.body.password);
  let correo = req.body.correo;
  let password = req.body.password;

  connection.connect();

  connection.query(connection, (err, conn) => {
    if (err) { console.log(err) }
    else {
      conn.query(`SELECT * FROM Usuario WHERE correo = '${correo}'`, (err, data) => {

        conn.end()
        if (err) { res.send('Correo o contraseña no son correctos' + err) }
        else {
          if (data.length == 0) {
            console.log("correo mal");
            res.send('Correo incorrecto')
          }
          else if (bcrypt.compareSync(password, data[0].PASSWORD) != 1) {
            //  else if (password != data[0].PASSWORD){
            res.send('Correo o contraseña no son correctos')
          } else {

            //Se crea un token con el id el correo y el rol
            var token = jwt.sign(
              { id_usuario: data[0].ID_USUARIO, nombre_usuario: data[0].NOMBRE_USUARIO },
              config.secret,
              { expiresIn: 86400 }
            )
            //Se responde con el token de autenticacion
            res.json({ auth: true, token: token })

          }

        }
      })
    }
  })

  // ibmdb.open(connStr, (err, conn) => {
  //     if (err) { console.log(err) }
  //     else {
  //         conn.query(`SELECT * FROM Usuario WHERE correo = '${correo}'`, (err, data) => {

  //             conn.close()
  //             if (err) { res.send('Correo o contraseña no son correctos' + err) }
  //             else {
  //                 //console.log(bcrypt.compareSync(password, data[0].PASSWORD))
  //                 if (data.length == 0) {
  //                   console.log("correo mal");
  //                     res.send('Correo incorrecto')
  //                 }
  //                else if (bcrypt.compareSync(password, data[0].PASSWORD) != 1) {
  //                 //  else if (password != data[0].PASSWORD){
  //                     res.send('Correo o contraseña no son correctos')
  //                 } else {

  //                       //Se crea un token con el id el correo y el rol
  //                   var token = jwt.sign(
  //                     { id_usuario: data[0].ID_USUARIO, nombre_usuario: data[0].NOMBRE_USUARIO},
  //                     config.secret,
  //                     { expiresIn: 86400 }
  //                     )
  //                     //Se responde con el token de autenticacion
  //                     res.json({ auth: true, token: token })

  //                 }

  //             }
  //         })
  //     }
  // }) 

}


loginCtrl.validarGerente = (req, res) => {
  let id = req.params.id;
  console.log(id);
  var query = `SELECT rol_id_rol FROM rol_has_usuario WHERE usuario_id_usuario ='${id}'`;

  ibmdb.open(connStr, function (err, conn) {
    if (err) return console.log(err);

    conn.query(query, function (err, data) {

      if (err) res.json({ error: err })
      else res.json(data)
      conn.close(function () {
        console.log('done Listar usuarios');
      });
    });
  });
}


loginCtrl.register = (req, res) => {

  //datos pedidos para la solicitud
  let id = req.body.id_usuario;
  let nombre = req.body.nombre_usuario;
  let correo = req.body.correo;
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log("passs2", req.body.password);
  console.log("passs", hashedPassword);
  //Abriendo conexion a la base de datos

  ibmdb.open(connStr, (err, conn) => {

    if (err) { console.log("ERROR" + err); }
    else {
      //Metodo que hace el query
      conn.query(`INSERT INTO usuario (id_usuario, nombre_usuario, correo, password,estadoeliminado)
          VALUES ( '${ id}', '${nombre}', '${correo}', '${hashedPassword}', '${false}')`
        , (err, data) => {
          //Se cierra la conexion de la base de datos
          conn.close()
          if (err) res.status(500).send('Hubo un problema registrando el usuario ' + err)
          else {
            var token = jwt.sign(
              { id_usuario: req.body.id_usuario, nombre_usuario: req.body.nombre_usuario },
              config.secret,
              { expiresIn: 86400 }
            )
            ibmdb.open(connStr, (err, conn) => {
              conn.query(`INSERT INTO rol_has_usuario (rol_id_rol, usuario_id_usuario)
                  VALUES ( '${1}','${id}')`
                , (err, data) => {
                  conn.close();
                })
            })
            res.json({ auth: true, token: token })
          }
        }
      )
    }
  })
}

loginCtrl.validarGerente = (req, res) => {
  let id = req.params.id;
  var query = `SELECT rol_id_rol FROM rol_has_usuario WHERE usuario_id_usuario ='${id}' `;

  ibmdb.open(connStr, function (err, conn) {
    if (err) return console.log(err);

    conn.query(query, function (err, data) {

      if (err) res.json({ error: err })
      else res.json(data)
      conn.close(function () {
        console.log('done Listar usuarios');

      });
    });
  });
}
//-----------------------------------------------------------------------
//Validar el id de un usario al registrarse que no sea el mismo
//-------------------------------------------------------------
loginCtrl.getIdUsuarioDuplicado = (req, res) => {
  var query = `SELECT * FROM usuario where estadoEliminado = false`
  ibmdb.open(connStr, function (err, conn) {
    if (err) return console.log(err);

    conn.query(query, function (err, data) {

      if (err) res.json({ error: err })
      else res.json(data)
      conn.close(function () {
        console.log('done Listar usuarios');

      });
    });
  });
}
module.exports = loginCtrl