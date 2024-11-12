-- ============================================================== 
-- SENTENCIAS DDL
-- ============================================================== 

CREATE TABLE genero (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_genero VARCHAR(30) NOT NULL
);

CREATE TABLE peliculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    estreno DATE NOT NULL
);

CREATE TABLE pelicula_genero (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pelicula INT NOT NULL,
    id_genero INT NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
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
