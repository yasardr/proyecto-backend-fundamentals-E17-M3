-- Creación de base de datos
CREATE DATABASE medi_manager;

/*Para poder crear las tablas usamos el comando "use" para
posicionarnos en nuestra base de datos**/
USE medi_manager;

-- Creación de tablas
CREATE TABLE producto(
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombreComercial VARCHAR(50) NOT NULL,
     nombreGenerico VARCHAR(50),
     presentacion VARCHAR(20) NOT NULL,
     unidadMedida VARCHAR(15) NOT NULL,
     categoria VARCHAR(30) NOT NULL,
     precioCompra DECIMAL(5,2) NOT NULL,
     precioVenta DECIMAL(5,2) NOT NULL,
     cantidad INT NOT NULL,
     observacion VARCHAR(255)
);

CREATE TABLE usuario(
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(30) NOT NULL,
     nombre VARCHAR(50) NOT NULL,
     apellido VARCHAR(50) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(30) NOT NULL,
     telefono VARCHAR(10),
     tipo VARCHAR(20) NOT NULL,
);


CREATE TABLE solicitud(
    id INT AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    productos VARCHAR(100) NOT NULL,
    fecha DATETIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(idUsuario) REFERENCES usuario(id)
);





