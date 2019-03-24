CREATE DATABASE IF NOT EXISTS `DBgestorCityCargo` DEFAULT CHARACTER SET utf8 ;
USE `DBgestorCityCargo` ;

-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nombreCliente` VARCHAR(45) NOT NULL,
  `celularCliente` VARCHAR(20) NOT NULL,
  `direccionCliente` VARCHAR(45) NULL,
  `estadoEliminado` TINYINT NULL,
  PRIMARY KEY (`idCliente`),
  UNIQUE INDEX `celular_UNIQUE` (`celularCliente` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`TipoVehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`TipoVehiculo` (
  `idTipoVehiculo` INT NOT NULL AUTO_INCREMENT,
  `nombreTipo` VARCHAR(50) NOT NULL,
  `descripcionTipo` VARCHAR(600) NULL,
  `estadoEliminado` TINYINT NULL,
  PRIMARY KEY (`idTipoVehiculo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Vehiculo` (
  `idVehiculo` INT NOT NULL AUTO_INCREMENT,
  `placaVehiculo` VARCHAR(50) NOT NULL,
  `descripcionVehiculo` VARCHAR(600) NULL,
  `TipoVehiculo_idTipoVehiculo` INT NOT NULL,
  `estadoEliminado` TINYINT NULL,
  PRIMARY KEY (`idVehiculo`),
  UNIQUE INDEX `placa_UNIQUE` (`placaVehiculo` ASC),
  INDEX `fk_Vehiculo_TipoVehiculo1_idx` (`TipoVehiculo_idTipoVehiculo` ASC),
  CONSTRAINT `fk_Vehiculo_TipoVehiculo1`
    FOREIGN KEY (`TipoVehiculo_idTipoVehiculo`)
    REFERENCES `DBgestorCityCargo`.`TipoVehiculo` (`idTipoVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Estado` (
  `idEstadoOrden` INT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEstadoOrden`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Orden` (
  `idOrden` INT NOT NULL AUTO_INCREMENT,
  `numeroOrden` VARCHAR(45) NOT NULL,
  `descripcionOrden` VARCHAR(600) NULL,
  `Estado_idEstadoOrden` INT NOT NULL,
  PRIMARY KEY (`idOrden`),
  UNIQUE INDEX `numeroOrden_UNIQUE` (`numeroOrden` ASC),
  INDEX `fk_Orden_Estado1_idx` (`Estado_idEstadoOrden` ASC),
  CONSTRAINT `fk_Orden_Estado1`
    FOREIGN KEY (`Estado_idEstadoOrden`)
    REFERENCES `DBgestorCityCargo`.`Estado` (`idEstadoOrden`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Servicio` (
  `idServicio` INT NOT NULL AUTO_INCREMENT,
  `nombreServicio` VARCHAR(50) NOT NULL,
  `descripciónServicio` VARCHAR(600) NULL,
  `valorServicio` FLOAT NOT NULL,
  `horaInicioServicio` TIME NOT NULL,
  `horaFinServicio` VARCHAR(45) NOT NULL,
  `fechaInicioServicio` DATE NOT NULL,
  `fechaFinServicio` DATE NULL,
  `observacion` VARCHAR(700) NULL,
  `ciudadOrigen` VARCHAR(100) NOT NULL,
  `ciudadDestino` VARCHAR(100) NOT NULL,
  `direccionOrigenServicio` VARCHAR(150) NULL,
  `direccionDestinoServicio` VARCHAR(150) NULL,
  `estadoEliminado` TINYINT NULL,
  `Cliente_idCliente` INT NOT NULL,
  `Vehiculo_idVehiculo` INT NOT NULL,
  `Orden_idOrden` INT NOT NULL,
  `Estado_idEstadoOrden` INT NOT NULL,
  PRIMARY KEY (`idServicio`),
  INDEX `fk_Servicio_Cliente1_idx` (`Cliente_idCliente` ASC),
  INDEX `fk_Servicio_Vehiculo1_idx` (`Vehiculo_idVehiculo` ASC),
  INDEX `fk_Servicio_Orden1_idx` (`Orden_idOrden` ASC),
  INDEX `fk_Servicio_Estado1_idx` (`Estado_idEstadoOrden` ASC),
  CONSTRAINT `fk_Servicio_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `DBgestorCityCargo`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Servicio_Vehiculo1`
    FOREIGN KEY (`Vehiculo_idVehiculo`)
    REFERENCES `DBgestorCityCargo`.`Vehiculo` (`idVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Servicio_Orden1`
    FOREIGN KEY (`Orden_idOrden`)
    REFERENCES `DBgestorCityCargo`.`Orden` (`idOrden`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Servicio_Estado1`
    FOREIGN KEY (`Estado_idEstadoOrden`)
    REFERENCES `DBgestorCityCargo`.`Estado` (`idEstadoOrden`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`ElementosTransporte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`ElementosTransporte` (
  `idElementosTransporte` INT NOT NULL AUTO_INCREMENT,
  `nombreElemento` VARCHAR(50) NOT NULL,
  `cantidadElemento` INT NOT NULL,
  `Servicio_idServicio` INT NOT NULL,
  PRIMARY KEY (`idElementosTransporte`),
  INDEX `fk_ElementosTransporte_Servicio1_idx` (`Servicio_idServicio` ASC),
  CONSTRAINT `fk_ElementosTransporte_Servicio1`
    FOREIGN KEY (`Servicio_idServicio`)
    REFERENCES `DBgestorCityCargo`.`Servicio` (`idServicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Conductor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Conductor` (
  `idConductor` INT NOT NULL AUTO_INCREMENT,
  `nombreConductor` VARCHAR(45) NOT NULL,
  `celularConductor` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idConductor`),
  UNIQUE INDEX `celularConductor_UNIQUE` (`celularConductor` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Rol` (
  `idRol` INT NOT NULL,
  `nombreRol` VARCHAR(50) NOT NULL,
  `descripción` VARCHAR(600) NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Vehiculo_has_Conductor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Vehiculo_has_Conductor` (
  `Vehiculo_idVehiculo` INT NOT NULL,
  `Conductor_idConductor` INT NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`Vehiculo_idVehiculo`, `Conductor_idConductor`),
  INDEX `fk_Vehiculo_has_Conductor_Conductor1_idx` (`Conductor_idConductor` ASC),
  INDEX `fk_Vehiculo_has_Conductor_Vehiculo1_idx` (`Vehiculo_idVehiculo` ASC),
  CONSTRAINT `fk_Vehiculo_has_Conductor_Vehiculo1`
    FOREIGN KEY (`Vehiculo_idVehiculo`)
    REFERENCES `DBgestorCityCargo`.`Vehiculo` (`idVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vehiculo_has_Conductor_Conductor1`
    FOREIGN KEY (`Conductor_idConductor`)
    REFERENCES `DBgestorCityCargo`.`Conductor` (`idConductor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBgestorCityCargo`.`Rol_has_Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBgestorCityCargo`.`Rol_has_Usuario` (
  `Rol_idRol` INT NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`Rol_idRol`, `Usuario_idUsuario`),
  INDEX `fk_Rol_has_Usuario_Usuario1_idx` (`Usuario_idUsuario` ASC),
  INDEX `fk_Rol_has_Usuario_Rol1_idx` (`Rol_idRol` ASC),
  CONSTRAINT `fk_Rol_has_Usuario_Rol1`
    FOREIGN KEY (`Rol_idRol`)
    REFERENCES `DBgestorCityCargo`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rol_has_Usuario_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `DBgestorCityCargo`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
