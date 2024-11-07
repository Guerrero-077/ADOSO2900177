-- SENTENCIAS DDL

CREATE TABLE zoologico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL
);

CREATE TABLE habitat (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    tipo VARCHAR(30) NOT NULL,
    capacidad INT NOT NULL,
    id_zoologico INT NOT NULL,
    FOREIGN KEY (id_zoologico) REFERENCES zoologico(id)
);


CREATE TABLE especie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL
);


CREATE TABLE animales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    id_especie INT,
    genero ENUM('Macho', 'Hembra'),
    id_habitat INT,
    FOREIGN KEY (id_especie) REFERENCES especie(id),
    FOREIGN KEY (id_habitat) REFERENCES habitat(id)
);


CREATE TABLE visitante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    fecha_visita DATE NOT NULL,
    id_zoologico INT,
    FOREIGN KEY (id_zoologico) REFERENCES zoologico(id)
);


CREATE TABLE tipoAlimento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL
);


CREATE TABLE alimentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    id_tipo INT NOT NULL,
    cantidad INT NOT NULL,
    id_zoologico INT,
    FOREIGN KEY (id_tipo) REFERENCES tipoAlimento(id),
    FOREIGN KEY (id_zoologico) REFERENCES zoologico(id)
);


CREATE TABLE listaAnimales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_zoologico INT NOT NULL,
    id_animal INT NOT NULL,
    FOREIGN KEY (id_zoologico) REFERENCES zoologico(id),
    FOREIGN KEY (id_animal) REFERENCES animales(id)
);


CREATE TABLE animales_alimentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_animal INT NOT NULL,
    id_alimento INT NOT NULL,
    cantidad_dia INT NOT NULL,
    FOREIGN KEY (id_animal) REFERENCES animales(id),
    FOREIGN KEY (id_alimento) REFERENCES alimentos(id)
);

-- SENTENCIAS DML

INSERT INTO zoologico (nombre, direccion)
                VALUES
                    ('Zoológico de Calí', 'Calí'),
                    ('La Granja de Pedro', 'Huila'),
                    ('Fundación Zoológico SantaCruz', 'Cundinamarca'),
                    ('Cafam Melgar Biopark', 'Melgar');


INSERT INTO habitat (nombre, tipo, capacidad, id_zoologico)
                VALUES
                    ('Selva Tropical', 'Selva', 15, 1),
                    ('Sabana Africana', 'sabana', 20, 2),
                    ('Acuario', 'Acuático', 50, 3),
                    ('Bosque Boreal', 'Bosque', 15, 4);


INSERT INTO especie (nombre)
                VALUES
                    ('Reptil'),
                    ('Aves'),
                    ('Mamifero'),
                    ('Insecto');


INSERT INTO animales (nombre, id_especie, genero, id_habitat)
                VALUES
                    ('Anaconda', 1, 'Hembra', 1),
                    ('Caiman', 1, 'Macho', 1),
                    ('Elefante', 2, 'Macho', 2),
                    ('Chimpance', 3, 'Macho', 1);


INSERT INTO visitante (nombre, fecha_visita, id_zoologico)
                VALUES
                    ('Brayan Santiago', '2024-10-20', 1),
                    ('Ingrid Yulissa', '2024-10-28', 2),
                    ('Juan Manuel', '2024-10-29', 3),
                    ('Linda Maria', '2024-10-30', 4);


INSERT INTO tipoAlimento (nombre)
                    VALUES
                        ('Carno'),
                        ('Vegetales'),
                        ('Frutas');


INSERT INTO alimentos (nombre, id_tipo, cantidad, id_zoologico)
                    VALUES
                        ('Carne de Res', 1, 100, 1),
                        ('Lechuga', 2, 50, 2),
                        ('Manzana', 3, 75, 3),
                        ('Pescado', 1, 200, 4);


INSERT INTO listaAnimales (id_zoologico, id_animal)
                        VALUES
                            (1, 1),
                            (2, 2),
                            (3, 3),
                            (4, 4);


INSERT INTO animales_alimentos (id_animal, id_alimento, cantidad_dia)
                            VALUES
                                (1, 1, 10),
                                (2, 2, 5),
                                (3, 3, 15),
                                (4, 4, 20);

-- Actualizar la Tabla alimentos
UPDATE alimentos
SET cantidad = 150
WHERE nombre = 'Carne de Res';

-- Eliminación de Zoológico
DELETE FROM zoologico
WHERE id = 1;
