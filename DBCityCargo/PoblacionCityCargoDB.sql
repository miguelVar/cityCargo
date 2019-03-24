-- Insersiones en la tabla Rol
INSERT INTO Rol VALUES(1,'Administrador','Administrador');

-- Insersion de usuario
INSERT INTO Usuario(nombreUsuario,correo,password) VALUES('Admin','Admin@citycargo.com','12345');
-- Insert con bcrypt
INSERT INTO Usuario(nombreUsuario,correo,password) VALUES('Admin','Admin@citycargo.com','$2y$08$lkMldzBikXFa2bIbwqdOaug0ubCYfVIwzKWkm8iWegrFpc.tw22oa');
INSERT INTO Usuario(nombreUsuario,correo,password) VALUES('Admin','Admin3@citycargo.com','827ccb0eea8a706c4c34a16891f84e7b');
-- Insersiones en la tabla Estado
INSERT INTO Estado VALUES(1,'Sin Iniciar');
INSERT INTO Estado VALUES(2,'En Proceso');
INSERT INTO Estado VALUES(3,'Finalizado');

-- Insersiones en la tabla TipoVehiculo
INSERT INTO TipoVehiculo(nombreTipo,descripcionTipo) VALUES('Furgon','Vehículo de carga ligera');
