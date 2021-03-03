/*Creamos nuestra base de datos**/
create database MediManager;

/*Para poder crear las tablas usamos el comando "use" para
posicionarnos en nuestra base de datos**/
use MediManager;

/*Crear las tablas**/

CREATE TABLE producto(
     id INT NOT NULL AUTO_INCREMENT,
     nombreComercial VARCHAR(30) NOT NULL,
     nombreGenerico VARCHAR(30) NOT NULL,
     presentacion VARCHAR(20) NOT NULL,
     categoria VARCHAR(30) NOT NULL,
     precioCompra DECIMAL(5,2) NOT NULL,
     precioVenta DECIMAL(5,2) NOT NULL,
     cantidad INT NOT NULL,
     observacion VARCHAR(100),
     PRIMARY KEY(id)
);

CREATE TABLE usuario(
     id INT NOT NULL AUTO_INCREMENT,
     nombreUsuario VARCHAR(25) NOT NULL,
     nombre VARCHAR(30) NOT NULL,
     apellido VARCHAR(30) NOT NULL,
     correo VARCHAR(50) NOT NULL,
     contraseña VARCHAR(50) NOT NULL,
     telefono VARCHAR(15),
     tipo VARCHAR(20) NOT NULL,
     PRIMARY KEY(id)
);


CREATE TABLE solicitud(
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    productos VARCHAR(100) NOT NULL,
    fecha DATETIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(idUsuario) REFERENCES usuario(id)
);





