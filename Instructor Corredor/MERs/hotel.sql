-- SENTENCIAS DDL

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    telefono VARCHAR(10)
);

CREATE TABLE tipoHabitacion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    valor_noche DECIMAL(10, 2) NOT NULL
);

CREATE TABLE habitaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo INT NOT NULL,
    numero VARCHAR(30) UNIQUE NOT NULL,
    FOREIGN KEY (id_tipo) REFERENCES tipoHabitacion(id) 
);

CREATE TABLE reservas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    id_habitacion INT NOT NULL,
    ficha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id), 
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id)
);

CREATE TABLE servicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE detalles_servicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva INT NOT NULL,
    id_servicio INT NOT NULL,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id),
    FOREIGN KEY (id_servicio) REFERENCES servicios(id)
);

CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT,
    cargo VARCHAR(30) NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id) 
);

CREATE TABLE empleados_servicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_empleado INT NOT NULL,
    id_servicio INT NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id),
    FOREIGN KEY (id_servicio) REFERENCES servicios(id)
);

-- SENTENCIAS DML

INSERT INTO persona(nombre, telefono)
                    VALUES 
                        ('Brayan Santiago', '1234567890'),
                        ('Ingrid Yulissa', '1234567890'),
                        ('Juan Manuel', '1234567890'),
                        ('Linda Maria', '1234567890');


INSERT INTO tipoHabitacion (nombre, valor_noche) 
                    VALUES
                            ('Individual', 100.00),
                            ('Doble', 150.50),
                            ('Suite', 200.00);


INSERT INTO habitaciones (id_tipo, numero) 
                    VALUES
                        (1, '101'),
                        (1, '102'),
                        (2, '201'),
                        (2, '202'),
                        (3, '301');


INSERT INTO reservas (id_persona, id_habitacion, ficha_inicio, fecha_fin) 
                VALUES
                    (1, 1, '2024-11-01', '2024-11-05'),
                    (2, 3, '2024-11-02', '2024-11-06'),
                    (3, 2, '2024-11-03', '2024-11-07');


INSERT INTO servicios (nombre, descripcion) 
                VALUES
                    ('Wi-Fi', 'Acceso a internet de alta velocidad'),
                    ('Desayuno', 'Desayuno buffet incluido'),
                    ('Aire acondicionado', 'Aire acondicionado en la habitación');


INSERT INTO detalles_servicios (id_reserva, id_servicio) 
                        VALUES
                                (1, 1),
                                (2, 2),
                                (3, 3);


INSERT INTO empleados (id_persona, cargo) 
                VALUES
                        (1, 'Chef'),
                        (2, 'Lavanderias');


INSERT INTO empleados_servicios (id_empleado, id_servicio) 
                        VALUES
                                (1, 1),
                                (2, 2),
                                (3, 2);


UPDATE empleado
SET cardo = 'Lavanderia'
WHERE id = 2;

DELETE FROM tipoHabitacion
WHERE id = 3;