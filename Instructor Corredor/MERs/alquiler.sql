-- SENTENCIAS DDL

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    correo VARCHAR(50) NOT NULL
);

CREATE TABLE tipo_vehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(30) NOT NULL,
    valor_hora DECIMAL(10, 2) NOT NULL
);

CREATE TABLE vehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo_vehiculo INT NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    estado BOOLEAN NOT NULL,
    FOREIGN KEY (id_tipo_vehiculo) REFERENCES tipo_vehiculo(id)
);

CREATE TABLE concesionario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL
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
    metodo VARCHAR(30) NOT NULL
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




-- procesos de almacenados

-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_persona(IN nombreP VARCHAR(30), IN apellidoP VARCHAR(30), IN telefonoP VARCHAR(10), IN correoP VARCHAR(50))
--         BEGIN
--             INSERT INTO persona (nombre, apellido, telefono, correo) 
--                         VALUES (nombreP, apellidoP, telefonoP, correoP);
--         END $$
-- DELIMITER ;

-- forma con validacion 

DELIMITER $$

    CREATE PROCEDURE insertar_persona(
        IN p_nombre VARCHAR(30),
        IN p_apellido VARCHAR(30),
        IN p_telefono VARCHAR(10),
        IN p_correo VARCHAR(50)
    )
    BEGIN
        -- me validaque no exista dos teléfono o correo iguales
        IF EXISTS (
            SELECT 1 FROM persona 
            WHERE telefono = p_telefono OR correo = p_correo
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Persona con el mismo teléfono o correo ya existe.';
        ELSE
            INSERT INTO persona (nombre, apellido, telefono, correo)
            VALUES (p_nombre, p_apellido, p_telefono, p_correo);
        END IF;
    END $$

DELIMITER ;

--  ==============================================================================================
-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_tipo_vehiculo(IN tipoP VARCHAR(30), IN valor_horaP DECIMAL(10, 2))
--         BEGIN
--             INSERT INTO tipo_vehiculo (tipo, valor_hora) VALUES (tipoP, valor_horaP);
--         END $$
-- DELIMITER ;

--forma con validacion 

DELIMITER $$

    CREATE PROCEDURE insertar_tipo_vehiculo(
        IN p_tipo VARCHAR(30),
        IN p_valor_hora DECIMAL(10, 2)
    )
    BEGIN
    
        -- me valida que el tipo de vehiculo sea único

        IF EXISTS (
            SELECT 1 FROM tipo_vehiculo 
            WHERE tipo = p_tipo
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Tipo de vehículo ya existe.';
        ELSE
            INSERT INTO tipo_vehiculo (tipo, valor_hora)
            VALUES (p_tipo, p_valor_hora);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal 

-- DELIMITER $$
--     CREATE PROCEDURE insertar_vehiculo(IN id_tipo_vehiculoP INT, IN modeloP VARCHAR(30), IN marcaP VARCHAR(30), IN estadoP BOOLEAN)
--         BEGIN
--             INSERT INTO vehiculo (id_tipo_vehiculo, modelo, marca, estado) VALUES (id_tipo_vehiculoP, modeloP, marcaP, estadoP);
--         END $$
-- DELIMITER ;

-- forma con la validacion

DELIMITER $$

    CREATE PROCEDURE insertar_vehiculo(
        IN p_id_tipo_vehiculo INT,
        IN p_modelo VARCHAR(30),
        IN p_marca VARCHAR(30),
        IN p_estado BOOLEAN
    )
    BEGIN
            -- me verifica si un vehiculo ya esta registrado

        IF EXISTS (
            SELECT 1 FROM vehiculo 
            WHERE modelo = p_modelo AND marca = p_marca
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Vehículo con el mismo modelo y marca ya existe.';
        ELSE
            INSERT INTO vehiculo (id_tipo_vehiculo, modelo, marca, estado)
            VALUES (p_id_tipo_vehiculo, p_modelo, p_marca, p_estado);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER %
--     CREATE PROCEDURE insertar_concesionario(IN nombreP VARCHAR(30), IN direccionP VARCHAR(30))
--         BEGIN
--             INSERT INTO concesionario (nombre, direccion) VALUES (nombreP, direccionP);
--         END %
-- DELIMITER ;

-- forma con validacion

DELIMITER $$

    CREATE PROCEDURE insertar_concesionario(
        IN p_nombre VARCHAR(30),
        IN p_direccion VARCHAR(30)
    )
    BEGIN
        -- me valida que el concesionario no tenga el mismo nobre 
        IF EXISTS (
            SELECT 1 FROM concesionario 
            WHERE nombre = p_nombre
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Concesionario con el mismo nombre ya existe.';
        ELSE
            INSERT INTO concesionario (nombre, direccion)
            VALUES (p_nombre, p_direccion);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_reserva(IN id_clienteP INT, IN id_vehiculoP INT, IN cantidad_horaP INT)
--         BEGIN
--             INSERT INTO reserva (id_cliente, id_vehiculo, cantidad_hora) VALUES (id_clienteP, id_vehiculoP, cantidad_horaP);
--         END $$
-- DELIMITER ;

-- forma con validacion

DELIMITER $$

CREATE PROCEDURE insertar_reserva(
    IN p_id_cliente INT,
    IN p_id_vehiculo INT,
    IN p_cantidad_hora INT
)
BEGIN
    -- me valida si un reserva ya esta asociada a un cliente y a un vehiculo
    IF EXISTS (
        SELECT 1 FROM reserva 
        WHERE id_cliente = p_id_cliente AND id_vehiculo = p_id_vehiculo
    ) THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Error: Reserva para el mismo cliente y vehículo ya existe.';
    ELSE
        INSERT INTO reserva (id_cliente, id_vehiculo, cantidad_hora)
        VALUES (p_id_cliente, p_id_vehiculo, p_cantidad_hora);
    END IF;
END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_metodoPago(IN metodoP VARCHAR(30))
--         BEGIN
--             INSERT INTO metodoPago (metodo) VALUES (metodoP);
--         END $$
-- DELIMITER ;

-- DELIMITER $$

-- forma con validacion

DELIMITER $$

    CREATE PROCEDURE insertar_metodoPago(
        IN p_metodo VARCHAR(30)
    )
    BEGIN
        -- me valida si que cada nombre del metodo de pago sea unico 
        IF EXISTS (
            SELECT 1 FROM metodoPago 
            WHERE metodo = p_metodo
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Método de pago ya existe.';
        ELSE
            INSERT INTO metodoPago (metodo)
            VALUES (p_metodo);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_factura(IN id_reservaP INT, IN id_metodoPagoP INT, IN totalP DECIMAL(10, 2))
--         BEGIN
--             INSERT INTO factura (id_reserva, id_metodoPago, total) VALUES (id_reservaP, id_metodoPagoP, totalP);
--         END $$
-- DELIMITER ;

-- DELIMITER $$

-- forma con validacion

DELIMITER $$


    CREATE PROCEDURE insertar_factura(
        IN p_id_reserva INT,
        IN p_id_metodoPago INT,
        IN p_total DECIMAL(10, 2)
    )
    BEGIN
        -- me valida si una factura ya esta asociada a un reserva
        IF EXISTS (
            SELECT 1 FROM factura 
            WHERE id_reserva = p_id_reserva
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Factura para la misma reserva ya existe.';
        ELSE
            INSERT INTO factura (id_reserva, id_metodoPago, total)
            VALUES (p_id_reserva, p_id_metodoPago, p_total);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_listaVehiculo(IN id_concesionarioP INT, IN id_vehiculoP INT)
--         BEGIN
--             INSERT INTO listaVehiculo (id_concesionario, id_vehiculo) VALUES (id_concesionarioP, id_vehiculoP);
--         END $$
-- DELIMITER ;

-- DELIMITER $$

-- forma con validacion

DELIMITER $$

    CREATE PROCEDURE insertar_listaVehiculo(
        IN p_id_concesionario INT,
        IN p_id_vehiculo INT
    )
    BEGIN
        -- me verifica si un vehiculo ya esta el lista
        IF EXISTS (
            SELECT 1 FROM listaVehiculo 
            WHERE id_concesionario = p_id_concesionario AND id_vehiculo = p_id_vehiculo
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Relación entre concesionario y vehículo ya existe.';
        ELSE
            INSERT INTO listaVehiculo (id_concesionario, id_vehiculo)
            VALUES (p_id_concesionario, p_id_vehiculo);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- forma normal

-- DELIMITER $$
--     CREATE PROCEDURE insertar_historialUso(IN id_vehiculoP INT, IN id_clienteP INT, IN fecha_usoP DATE)
--         BEGIN
--             INSERT INTO historialUso (id_vehiculo, id_cliente, fecha_uso) VALUES (id_vehiculoP, id_clienteP, fecha_usoP);
--         END $$
-- DELIMITER ;

-- forma con validacion

DELIMITER $$

    CREATE PROCEDURE insertar_historialUso(
        IN p_id_vehiculo INT,
        IN p_id_cliente INT,
        IN p_fecha_uso DATE
    )
    BEGIN
        -- me valida si un cliente ya tiene un hitorial de uso para un vehiculo
        IF EXISTS (
            SELECT 1 FROM historialUso 
            WHERE id_vehiculo = p_id_vehiculo AND id_cliente = p_id_cliente AND fecha_uso = p_fecha_uso
        ) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Error: Historial de uso para el mismo vehículo y cliente ya existe en la misma fecha.';
        ELSE
            INSERT INTO historialUso (id_vehiculo, id_cliente, fecha_uso)
            VALUES (p_id_vehiculo, p_id_cliente, p_fecha_uso);
        END IF;
    END $$

DELIMITER ;


--  ==============================================================================================


-- llamada a los proceso de almacenado 

CALL insertar_persona('Brayan Santiago', 'Guerrero', '1023456789', 'santiago@gmail.com');
CALL insertar_persona('Ingrid Yulissa', 'Medina', '1203456789', 'ingrid@gmail.com');
CALL insertar_persona('Juan Manuel', 'Gutierrez', '1230456789', 'juan@gmail.com');
CALL insertar_persona('Linda Maria', 'Ramirez', '1234056789', 'linda@gmail.com');
CALL insertar_persona('Laura Valentina', 'Morales', '1234506789', 'laura@gmail.com');
CALL insertar_persona('Laura Valentina', 'Morales', '1234506789', 'laura@gmail.com'); -- dato duplicado

--  ==============================================================================================


CALL insertar_tipo_vehiculo('Sedán', 150000.00);
CALL insertar_tipo_vehiculo('Deportivo', 250000.00);
CALL insertar_tipo_vehiculo('Moto', 50000.00);
CALL insertar_tipo_vehiculo('Bicicleta', 25000.00);
CALL insertar_tipo_vehiculo('Camioneta', 350000.00);

--  ==============================================================================================


CALL insertar_vehiculo(1, 'Aveo', 'Chevrolet', true);
CALL insertar_vehiculo(2, 'mx-5', 'Mazda', true);
CALL insertar_vehiculo(3, 'Ninja', 'Kawasaki', true);
CALL insertar_vehiculo(4, 'Cross Country', 'Trek', true);
CALL insertar_vehiculo(5, 'Ranger', 'Ford', true);

--  ==============================================================================================


CALL insertar_concesionario('Ford Simotor', 'Carrera 5 N. 3');
CALL insertar_concesionario('Autoshop Chevrolet', 'Carrera 5 N. 26');
CALL insertar_concesionario('JMC Automotores', 'Carrera 5 N. 15');
CALL insertar_concesionario('inverautos', 'Carrera 5 N. 11');
CALL insertar_concesionario('Distoyota', 'Carrera 5 N. 10');

--  ==============================================================================================


CALL insertar_reserva(1, 1, 1);
CALL insertar_reserva(2, 2, 2);
CALL insertar_reserva(3, 3, 3);
CALL insertar_reserva(4, 4, 4);
CALL insertar_reserva(5, 5, 5);

--  ==============================================================================================


CALL insertar_metodoPago('Tarjetas de débito y crédito');
CALL insertar_metodoPago('Tranferencia Bancaria');
CALL insertar_metodoPago('Nequi');
CALL insertar_metodoPago('Cheques');
CALL insertar_metodoPago('Efectivo');

--  ==============================================================================================


CALL insertar_factura(1, 1, 150000.00);
CALL insertar_factura(2, 2, 500000.00);
CALL insertar_factura(3, 3, 150000.00);
CALL insertar_factura(4, 4, 75000.00);
CALL insertar_factura(5, 5, 1750000.00);

--  ==============================================================================================


CALL insertar_listaVehiculo(1, 1);
CALL insertar_listaVehiculo(2, 2);
CALL insertar_listaVehiculo(3, 3);
CALL insertar_listaVehiculo(4, 4);
CALL insertar_listaVehiculo(5, 5);


--  ==============================================================================================


CALL insertar_historialUso(1, 1, '2024-11-01');
CALL insertar_historialUso(2, 2, '2024-11-01');
CALL insertar_historialUso(3, 3, '2024-10-28');
CALL insertar_historialUso(4, 4, '2024-10-27');
CALL insertar_historialUso(5, 5, '2024-09-15');

--  ==============================================================================================


-- SENTENCIAS DML

INSERT INTO persona(nombre, apellido, telefono, correo)
                VALUES 
                    ('Brayan Santiago', 'Guerrero', '1023456789', 'santiago@gmail.com'),
                    ('Ingrid Yulissa', 'Medina', '1203456789', 'ingrid@gmail.com'),
                    ('Juan Manuel', 'Gutierrez', '1230456789', 'juan@gmail.com'),
                    ('Linda Maria', 'Ramirez', '1234056789', 'linda@gmail.com');
                    ('Laura Valentina', 'Morales', '1234506789', 'laura@gmail.com');

INSERT INTO tipo_vehiculo (tipo, valor_hora)
                    VALUES 
                        ('Sedán', 150000.00),
                        ('Deportivo', 250000.00),
                        ('Moto', 50000.00),
                        ('Bicicleta', 25000.00),
                        ('Camioneta', 350000.00);

INSERT INTO vehiculo (id_tipo_vehiculo, modelo, marca, estado)
                VALUES 
                    (1, 'Aveo', 'Chevrolet', true),
                    (2, 'mx-5', 'Mazda', true),
                    (3, 'Ninja', 'Kawasaki', true),
                    (4, 'Cross Country', 'Trek', true),
                    (5, 'Ranger', 'Ford', true);

INSERT INTO concesionario (nombre, direccion)
                    VALUES 
                        ('Ford Simotor', 'Carrera 5 N. 3'),
                        ('Autoshop Chevrolet', 'Carrera 5 N. 26'),
                        ('JMC Automotores', 'Carrera 5 N. 15'),
                        ('inverautos', 'Carrera 5 N. 11'),
                        ('Distoyota', 'Carrera 5 N. 10');

INSERT INTO reserva (id_cliente, id_vehiculo, cantidad_hora)
                VALUES 
                    (1, 1, 1),
                    (2, 2, 2),
                    (3, 3, 3),
                    (4, 4, 4),
                    (5, 5, 5);

INSERT INTO metodoPago (metodo)
                VALUES 
                    ('Tarjetas de débito y crédito'),
                    ('Tranferenia Bancaria'),
                    ('Nequi'),
                    ('Cheques'),
                    ('Efectivo');

INSERT INTO factura (id_reserva, id_metodoPago, total)
                VALUES 
                    (1, 1, 150000.00),
                    (2, 2, 500000.00),
                    (3, 3, 150000.00),
                    (4, 4, 75000.00),
                    (5, 5, 1750000.00);
INSERT INTO listaVehiculo (id_concesionario, id_vehiculo)
                        VALUES 
                            (1, 1),
                            (2, 2),
                            (3, 3),
                            (4, 4),
                            (5, 5);

INSERT INTO historialUso (id_vehiculo, id_cliente, fecha_uso)
                    VALUES 
                        (1, 1, '2024-11-01'),
                        (2, 2, '2024-11-01'),
                        (3, 3, '2024-10-28'),
                        (4, 4, '2024-10-27'),
                        (5, 5, '2024-09-15');

UPDATE vehiculo 
SET estado = false
WHERE id = 4;

DELETE FROM vehiculo
WHERE id = 2;


