DROP TABLE Cliente;
DROP TABLE TipoVehiculo;
DROP TABLE Vehiculo;
DROP TABLE Estado;
DROP TABLE Orden;
DROP TABLE Servicio;
DROP TABLE ElementosTransporte;
DROP TABLE Conductor;
DROP TABLE Rol;
DROP TABLE Usuario;
DROP TABLE Vehiculo_has_Conductor;
DROP TABLE Rol_has_Usuario;

-- -----------------------------------------------------
-- Table Cliente
-- -----------------------------------------------------
CREATE TABLE Cliente (
  idCliente INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreCliente VARCHAR(45) NOT NULL,
  celularCliente VARCHAR(20) UNIQUE NOT NULL,
  direccionCliente VARCHAR(45) NULL,
  estadoEliminado BOOLEAN NULL,
  PRIMARY KEY (idCliente)
);

-- -----------------------------------------------------
-- Table TipoVehiculo
-- -----------------------------------------------------
CREATE TABLE TipoVehiculo (
  idTipoVehiculo INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreTipo VARCHAR(50) NOT NULL,
  descripcionTipo VARCHAR(600) NULL,
  estadoEliminado BOOLEAN NULL,
  PRIMARY KEY (idTipoVehiculo)
);

-- -----------------------------------------------------
-- Table Vehiculo
-- -----------------------------------------------------
CREATE TABLE Vehiculo (
  idVehiculo INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  placaVehiculo VARCHAR(50) NOT NULL,
  descripcionVehiculo VARCHAR(600) NULL,
  TipoVehiculo_idTipoVehiculo INT NOT NULL,
  estadoEliminado BOOLEAN NULL,
  PRIMARY KEY (idVehiculo),
  CONSTRAINT fk_Vehiculo_TipoVehiculo1 FOREIGN KEY (TipoVehiculo_idTipoVehiculo) REFERENCES TipoVehiculo (idTipoVehiculo) ON DELETE NO ACTION ON UPDATE NO ACTION
);


-- -----------------------------------------------------
-- Table Estado
-- -----------------------------------------------------
CREATE TABLE Estado (
  idEstadoOrden INT NOT NULL,
  estado VARCHAR(45) NOT NULL,
  PRIMARY KEY (idEstadoOrden)
);

-- -----------------------------------------------------
-- Table Orden
-- -----------------------------------------------------
CREATE TABLE Orden (
  idOrden INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  numeroOrden VARCHAR(45) NOT NULL,
  descripcionOrden VARCHAR(600) NULL,
  Estado_idEstadoOrden INT NOT NULL,
  PRIMARY KEY (idOrden),
  CONSTRAINT fk_Orden_Estado1 FOREIGN KEY (Estado_idEstadoOrden) REFERENCES Estado (idEstadoOrden) ON DELETE NO ACTION ON UPDATE NO ACTION
);


-- -----------------------------------------------------
-- Table Servicio
-- -----------------------------------------------------
CREATE TABLE Servicio (
  idServicio INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreServicio VARCHAR(50) NOT NULL,
  descripciónServicio VARCHAR(600) NULL,
  valorServicio FLOAT NOT NULL,
  horaInicioServicio TIME NOT NULL,
  horaFinServicio VARCHAR(45) NOT NULL,
  fechaInicioServicio DATE NOT NULL,
  fechaFinServicio DATE NULL,
  observacion VARCHAR(700) NULL,
  ciudadOrigen VARCHAR(100) NOT NULL,
  ciudadDestino VARCHAR(100) NOT NULL,
  direccionOrigenServicio VARCHAR(150) NULL,
  direccionDestinoServicio VARCHAR(150) NULL,
  estadoEliminado BOOLEAN NULL,
  Cliente_idCliente INT NOT NULL,
  Vehiculo_idVehiculo INT NOT NULL,
  Orden_idOrden INT NOT NULL,
  Estado_idEstadoOrden INT NOT NULL,
  PRIMARY KEY (idServicio),
  CONSTRAINT fk_Servicio_Cliente1 FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Servicio_Vehiculo1 FOREIGN KEY (Vehiculo_idVehiculo) REFERENCES Vehiculo (idVehiculo) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Servicio_Orden1 FOREIGN KEY (Orden_idOrden) REFERENCES Orden (idOrden) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Servicio_Estado1 FOREIGN KEY (Estado_idEstadoOrden) REFERENCES Estado (idEstadoOrden) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table ElementosTransporte
-- -----------------------------------------------------
CREATE TABLE ElementosTransporte (
  idElementosTransporte INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreElemento VARCHAR(50) NOT NULL,
  cantidadElemento INT NOT NULL,
  Servicio_idServicio INT NOT NULL,
  PRIMARY KEY (idElementosTransporte),
  CONSTRAINT fk_ElementosTransporte_Servicio1 FOREIGN KEY (Servicio_idServicio) REFERENCES Servicio (idServicio) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table Conductor
-- -----------------------------------------------------
CREATE TABLE Conductor (
  idConductor INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreConductor VARCHAR(45) NOT NULL,
  celularConductor VARCHAR(20) NOT NULL,
  estadoEliminado BOOLEAN NULL,
  PRIMARY KEY (idConductor)
);

-- -----------------------------------------------------
-- Table Rol
-- -----------------------------------------------------
CREATE TABLE Rol (
  idRol INT NOT NULL,
  nombreRol VARCHAR(50) NOT NULL,
  descripción VARCHAR(600) NULL,
  PRIMARY KEY (idRol)
);

-- -----------------------------------------------------
-- Table Usuario
-- -----------------------------------------------------
CREATE TABLE Usuario (
  idUsuario INT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  nombreUsuario VARCHAR(100) NOT NULL,
  correo VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  PRIMARY KEY (idUsuario)
);

-- -----------------------------------------------------
-- Table Vehiculo_has_Conductor
-- -----------------------------------------------------
CREATE TABLE Vehiculo_has_Conductor (
  Vehiculo_idVehiculo INT NOT NULL,
  Conductor_idConductor INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (Vehiculo_idVehiculo, Conductor_idConductor),
  CONSTRAINT fk_Vehiculo_has_Conductor_Vehiculo1 FOREIGN KEY (Vehiculo_idVehiculo) REFERENCES Vehiculo (idVehiculo) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Vehiculo_has_Conductor_Conductor1 FOREIGN KEY (Conductor_idConductor) REFERENCES Conductor (idConductor) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table Rol_has_Usuario
-- -----------------------------------------------------
CREATE TABLE Rol_has_Usuario (
  Rol_idRol INT NOT NULL,
  Usuario_idUsuario INT NOT NULL,
  PRIMARY KEY (Rol_idRol, Usuario_idUsuario),
  CONSTRAINT fk_Rol_has_Usuario_Rol1 FOREIGN KEY (Rol_idRol) REFERENCES Rol (idRol) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Rol_has_Usuario_Usuario1 FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario (idUsuario) ON DELETE NO ACTION ON UPDATE NO ACTION
);
