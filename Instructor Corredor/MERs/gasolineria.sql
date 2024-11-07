-- SENTENCIAS DDL

CREATE TABLE estacion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL
);

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    telefono VARCHAR(10) NOT NULL
);

CREATE TABLE empleado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    id_estacion INT NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_estacion) REFERENCES estacion(id)
);

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE venta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_persona INT NOT NULL,
    id_empleado INT NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_empleado) REFERENCES empleado(id)
);

CREATE TABLE detalleVenta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES venta(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

CREATE TABLE proveedor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL, 
    FOREIGN KEY (id_persona) REFERENCES persona(id)
);

CREATE TABLE proveedor_producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_proveedor INT NOT NULL,
    id_producto INT NOT NULL, 
    FOREIGN KEY (id_proveedor) REFERENCES proveedor(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

-- SENTENCIAS DML

INSERT INTO estacion(nombre, direccion)
                VALUES
                    ('EDS Terpel', 'Carrea 2'),
                    ('Estación Terpel', 'Calle 100'),
                    ('Estación de servicion Quirinal', 'Calle 18'),
                    ('Melenium gas', 'Calle 16');


INSERT INTO persona(nombre, telefono)
                VALUES
                    ('Brayan Santiago', '1234567890'),
                    ('Ingrid Yulissa', '1234567890'),
                    ('Juan Manuel', '1234567890'),
                    ('Linda Maria', '1234567890');


INSERT INTO empleado(id_persona, cargo, id_estacion)
                VALUES
                    (2, 'vendedor', 1),
                    (3, 'vendedor', 2);


INSERT INTO productos(nombre, precio)
                VALUES
                    ('Gasolina Corriente', 15160.00),
                    ('Gasolina Extra', 14041.00),
                    ('Disel', 9456.00),
                    ('Aceite Motor', 54000.00);


INSERT INTO venta(id_persona, id_empleado)
            VALUES
                (1, 1),
                (2, 2),
                (3, 1);


INSERT INTO detalleVenta(id_venta, id_producto, cantidad)
                VALUES
                    (1, 2, 3),
                    (1, 3, 2),
                    (2, 1, 3),
                    (3, 3, 4);


INSERT INTO proveedor(id_persona)
                VALUES
                    (1),
                    (4);


INSERT INTO proveedor_producto(id_proveedor, id_producto)
                        VALUES
                            (1, 1),
                            (1, 2),
                            (2, 2),
                            (2, 3);

UPDATE productos
SET precio = 15570.00
WHERE id = 1;

DELETE FROM productos
WHERE id = 4;