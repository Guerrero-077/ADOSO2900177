CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    correo VARCHAR(100) NOT NULL
);

CREATE TABLE tipo_vehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL,
    valor_hora DECIMAL(10, 2) NOT NULL
);

CREATE TABLE vehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo_vehiculo INT NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    estado BOOLEAN NOT NULL,
    FOREIGN KEY (id_tipo_vehiculo) REFERENCES tipo_vehiculo(id)
);

CREATE TABLE concesionario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(150) NOT NULL
);

CREATE TABLE reserva (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_vehiculo INT NOT NULL,
    cantidad_hora INT NOT NULL,
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id),
    FOREIGN KEY (id_cliente) REFERENCES persona(id)
);

CREATE TABLE metodoPago (
    id INT PRIMARY KEY AUTO_INCREMENT,
    metodo VARCHAR(50) NOT NULL
);

CREATE TABLE factura (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva INT NOT NULL,
    id_metodoPago INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_reserva) REFERENCES reserva(id),
    FOREIGN KEY (id_metodoPago) REFERENCES metodoPago(id)
);

CREATE TABLE listaVehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_concesionario INT NOT NULL,
    id_vehiculo INT NOT NULL,
    FOREIGN KEY (id_concesionario) REFERENCES concesionario(id),
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id)
);

CREATE TABLE historialUso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_vehiculo INT NOT NULL,
    id_cliente INT NOT NULL,
    fecha_uso DATE NOT NULL,
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id),
    FOREIGN KEY (id_cliente) REFERENCES persona(id)
);

CREATE TABLE persona_concesionario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    id_concesionario INT NOT NULL,
    fecha_visita DATE NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_concesionario) REFERENCES concesionario(id)
);

