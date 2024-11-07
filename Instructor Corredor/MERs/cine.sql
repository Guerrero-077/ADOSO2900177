-- SENTENCIAS DDL

CREATE TABLE genero (
    id INT PRIMARY KEY AUTO_INCREMENT,
    genero VARCHAR(30) NOT NULL
);

CREATE TABLE peliculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    estreno DATE NOT NULL,
    id_genero INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES genero(id)
);

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(30) NOT NULL
);

CREATE TABLE cines (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL
);

CREATE TABLE funciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pelicula INT NOT NULL,
    id_cine INT NOT NULL,
    hora TIMESTAMP NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
    FOREIGN KEY (id_cine) REFERENCES cines(id)
);

CREATE TABLE elenco (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pelicula INT NOT NULL,
    id_persona INT NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_rol) REFERENCES roles(id)
);


CREATE TABLE pelicula_cine (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cine INT NOT NULL,
    id_pelicula INT NOT NULL,
    FOREIGN KEY (id_cine) REFERENCES cines(id),
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id)
);

-- SENTENCIAS DML
INSERT INTO genero (genero) 
            VALUES 
            ('Acción'),
            ('Animación'),
            ('Drama'),
            ('Terror');


INSERT INTO peliculas (titulo, estreno, id_genero) 
                    VALUES 
                    ('Avengers: Endgame', '2019-04-26', 1),  
                    ('El Rey León', '2024-12-20', 2),  
                    ('Joker 2', '2016-10-02', 3),  
                    ('It 2', '2017-09-04', 4);


INSERT INTO persona (nombre) 
                    VALUES 
                    ('Robert Downey Jr.'),
                    ('Ellen DeGeneres'),
                    ('Joaquín Phoenix'),
                    ('Josh Cooley');


INSERT INTO roles (rol) 
                VALUES 
                ('Protagonista'),
                ('Antagonista'),
                ('Actor Secundario'),
                ('Director');


INSERT INTO cines (nombre, direccion) 
                VALUES 
                ('Cinemark', 'Calle 8 N.38'),
                ('Royal Films', 'Calle 64 N. 64'),
                ('Cineland', 'Calle 8 N.50');


INSERT INTO funciones (id_pelicula, id_cine, hora) 
                    VALUES 
                    (1, 1, '2024-11-05 20:00:00'),   
                    (2, 2, '2024-11-06 18:30:00'),   
                    (3, 3, '2024-11-07 21:00:00'),   
                    (4, 1, '2024-11-08 22:00:00');  


INSERT INTO elenco (id_pelicula, id_persona, id_rol) 
                    VALUES 
                    (1, 1, 1),  
                    (2, 2, 1),   
                    (3, 3, 2),   
                    (4, 4, 4);  


INSERT INTO pelicula_cine(id_cine, id_pelicula) 
                        VALUES 
                        (1, 1), 
                        (1, 2),
                        (2, 3);

UPDATE persona 
SET  nombre = 'Josh Cooley'
WHERE id  = 4;

DELETE FROM peliculas
WHERE id = 2;