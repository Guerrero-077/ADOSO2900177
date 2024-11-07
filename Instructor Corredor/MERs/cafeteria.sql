-- SENTENCIAS DDL
CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    telefono VARCHAR(10) NOT NULL
);

CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    cargo VARCHAR(30),
    FOREIGN KEY (id_persona) REFERENCES persona(id)
);

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE mesas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero INT NOT NULL,
    capacidad INT NOT NULL
);

CREATE TABLE ordenes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    id_empleado INT NOT NULL,
    id_mesa INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_empleado) REFERENCES empleados(id),
    FOREIGN KEY (id_mesa) REFERENCES mesas(id)  
);

CREATE TABLE detalle_orden (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_orden INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_orden) REFERENCES ordenes(id),  
    FOREIGN KEY (id_producto) REFERENCES productos(id)  
);

CREATE TABLE empleado_mesa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_empleado INT NOT NULL,
    id_mesa INT NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id),  
    FOREIGN KEY (id_mesa) REFERENCES mesas(id)  
);

-- SENTENCIAS DML
INSERT INTO persona(nombre, telefono)
                    VALUES 
                        ('Brayan Santiago', '1234567890'),
                        ('Ingrid Yulissa', '1234567890'),
                        ('Juan Manuel', '1234567890'),
                        ('Linda Maria', '1234567890');

INSERT INTO empleados (id_persona, cargo) 
                VALUES
                    (1, 'Camarero'),
                    (2, 'Chef'),
                    (3, 'Gerente');


INSERT INTO productos (nombre, precio) 
                VALUES
                    ('Cafe Americano', 5000.00),
                    ('Expresso', 4500.00),
                    ('Capuchino', 3500.00);


INSERT INTO mesas (numero, capacidad) 
            VALUES
                    (1, 4),
                    (2, 2),
                    (3, 6),
                    (4, 4),
                    (5, 2);


INSERT INTO ordenes (id_persona, id_empleado, id_mesa, fecha) 
            VALUES
                    (1, 1, 2, '2024-11-05'),
                    (2, 2, 3, '2024-11-05'),
                    (3, 3, 1, '2024-11-05');


INSERT INTO detalle_orden (id_orden, id_producto, cantidad) 
                VALUES
                        (1, 1, 1),
                        (1, 3, 2),  
                        (2, 2, 1),  
                        (2, 3, 1),
                        (3, 1, 2),
                        (3, 3, 3);   


INSERT INTO empleado_mesa (id_empleado, id_mesa) 
                    VALUES
                            (1, 2),  
                            (2, 3),  
                            (3, 1);


UPDATE productos
SET precio = 4000.00
WHERE id = 3;

DELETE FROM productos
WHERE id = 1;
