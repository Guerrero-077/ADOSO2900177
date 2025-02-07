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


-- ==============================================================
-- SENTENCIAS DDL
CREATE TABLE genero (
    id SERIAL PRIMARY KEY,
    tipo_genero VARCHAR(30) NOT NULL
);

CREATE TABLE peliculas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    estreno DATE NOT NULL,
    id_genero INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES genero(id)
);

CREATE TABLE persona (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    rol VARCHAR(30) NOT NULL
);

CREATE TABLE cines (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL
);

CREATE TABLE funciones (
    id SERIAL PRIMARY KEY,
    id_pelicula INT NOT NULL,
    id_cine INT NOT NULL,
    hora TIMESTAMP NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
    FOREIGN KEY (id_cine) REFERENCES cines(id)
);

CREATE TABLE elenco (
    id SERIAL PRIMARY KEY,
    id_pelicula INT NOT NULL,
    id_persona INT NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_rol) REFERENCES roles(id)
);


CREATE TABLE pelicula_cine (
    id SERIAL PRIMARY KEY,
    id_cine INT NOT NULL,
    id_pelicula INT NOT NULL,
    FOREIGN KEY (id_cine) REFERENCES cines(id),
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id)
);

DELIMITER $$

-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	
	CREATE PROCEDURE insertar_genero(
	    IN tipo_genero_p VARCHAR(30)
	)
	BEGIN
	   
	    IF EXISTS (SELECT 1 FROM genero WHERE tipo_genero = tipo_genero_p) THEN
	        SIGNAL SQLSTATE '45000' 
	        SET MESSAGE_TEXT = 'Error: Este género ya existe.';
	    ELSE
	        INSERT INTO genero (tipo_genero) 
	        VALUES (tipo_genero_p);
	    END IF;
	END $$
    
-- ============================================================== 
-- ACTUALIZAR DATOS 
-- ============================================================== 

CREATE PROCEDURE actualizar_genero(
    IN id_p INT, 
    IN nuevo_genero_p VARCHAR(100)
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM genero WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El género no existe.';
    ELSE
        UPDATE genero
        SET tipo_genero = nuevo_genero_p
        WHERE id = id_p;
    END IF;
END $$ 


-- ============================================================== 
-- ELIMINAR DATOS 
-- ============================================================== 

CREATE PROCEDURE eliminar_genero(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM genero WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El género no existe.';
    ELSE
        DELETE FROM genero
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- INSERTAR DATOS 
-- ==============================================================

	CREATE PROCEDURE insertar_pelicula(
	    IN titulo_p VARCHAR(100),
	    IN estreno_p DATE,
	    IN id_genero_p INT
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM peliculas WHERE titulo = titulo_p AND estreno = estreno_p) THEN
	        SIGNAL SQLSTATE '45000' 
	        SET MESSAGE_TEXT = 'Error: Esta película ya existe.';
	    ELSE
	        
			INSERT INTO peliculas (titulo, estreno, id_genero) 
	        VALUES (titulo_p, estreno_p, id_genero_p);
	    END IF;
	END $$

-- ==============================================================
-- ACTUALIZAR PELÍCULA
-- ==============================================================
CREATE PROCEDURE actualizar_pelicula(
    IN id_p INT,
    IN nuevo_titulo_p VARCHAR(100)
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM peliculas WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La película no existe.';
    ELSE
        UPDATE peliculas
        SET titulo = nuevo_titulo_p
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR PELÍCULA
-- ==============================================================
CREATE PROCEDURE eliminar_pelicula(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM peliculas WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La película no existe.';
    ELSE
        DELETE FROM peliculas
        WHERE id = id_p;
    END IF;
END $$ 


-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	CREATE PROCEDURE insertar_persona(
	    IN nombre_p VARCHAR(100)
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM persona WHERE nombre = nombre_p) THEN
	        SIGNAL SQLSTATE '45000'
	        SET MESSAGE_TEXT = 'Error: Esta persona ya existe.';
	    ELSE
	       
		   INSERT INTO persona (nombre)
	        VALUES (nombre_p);
	    END IF;
	END $$
    
    -- ==============================================================
-- ACTUALIZAR PERSONA
-- ==============================================================
CREATE PROCEDURE actualizar_persona(
    IN id_p INT,
    IN nuevo_nombre_p VARCHAR(100)
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM persona WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La persona no existe.';
    ELSE
        UPDATE persona
        SET nombre = nuevo_nombre_p
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR PERSONA
-- ==============================================================
CREATE PROCEDURE eliminar_persona(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM persona WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La persona no existe.';
    ELSE
        DELETE FROM persona
        WHERE id = id_p;
    END IF;
END $$ 

    
-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	CREATE PROCEDURE insertar_rol(
	    IN rol_p VARCHAR(30)
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM roles WHERE rol = rol_p) THEN
	        SIGNAL SQLSTATE '45000' 
	        SET MESSAGE_TEXT = 'Error: El rol ya existe';
	    ELSE
	        
	        INSERT INTO roles (rol) 
	        VALUES (rol_p);
	    END IF;
	END $$
    
-- ==============================================================
-- ACTUALIZAR ROL
-- ==============================================================
CREATE PROCEDURE actualizar_rol(
    IN id_p INT,
    IN nuevo_rol_p VARCHAR(30)
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM roles WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El rol no existe.';
    ELSE
        UPDATE roles
        SET rol = nuevo_rol_p
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR ROL
-- ==============================================================
CREATE PROCEDURE eliminar_rol(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM roles WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El rol no existe.';
    ELSE
        DELETE FROM roles
        WHERE id = id_p;
    END IF;
END $$ 


-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	CREATE PROCEDURE insertar_cine(
	    IN nombre_p VARCHAR(100),
	    IN direccion_p VARCHAR(100)
	)
	BEGIN
	    
		IF EXISTS (SELECT 1 FROM cines WHERE nombre = nombre_p OR direccion = direccion_p) THEN
	        SIGNAL SQLSTATE '45000'
	        SET MESSAGE_TEXT = 'Error: Este cine ya existe.';
	    ELSE
	        
	        INSERT INTO cines (nombre, direccion)
	        VALUES (nombre_p, direccion_p);
	    END IF;
	END $$
    
    -- ==============================================================
-- ACTUALIZAR CINE
-- ==============================================================
CREATE PROCEDURE actualizar_cine(
    IN id_p INT,
    IN nuevo_nombre_p VARCHAR(100)
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cines WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El cine no existe.';
    ELSE
        UPDATE cines
        SET nombre = nuevo_nombre_p
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR CINE
-- ==============================================================
CREATE PROCEDURE eliminar_cine(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cines WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El cine no existe.';
    ELSE
        DELETE FROM cines
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================
	
	CREATE PROCEDURE insertar_funcion(
	    IN id_pelicula INT,
	    IN id_cine INT,
	    IN hora_p TIMESTAMP
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM funciones WHERE id_pelicula = id_pelicula AND id_cine = id_cine AND hora = hora_p) THEN
	        SIGNAL SQLSTATE '45000' 
	        SET MESSAGE_TEXT = 'Error: Esta función ya existe.';
	    ELSE
	        
	        INSERT INTO funciones (id_pelicula, id_cine, hora)
	        VALUES (id_pelicula, id_cine, hora_p);
	    END IF;
	END $$
    
    -- ==============================================================
-- ACTUALIZAR FUNCIÓN
-- ==============================================================
CREATE PROCEDURE actualizar_funcion(
    IN id_p INT,
    IN nueva_hora TIMESTAMP
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM funciones WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La función no existe.';
    ELSE
        UPDATE funciones
        SET hora = nueva_hora
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR FUNCIÓN
-- ==============================================================
CREATE PROCEDURE eliminar_funcion(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM funciones WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La función no existe.';
    ELSE
        DELETE FROM funciones
        WHERE id = id_p;
    END IF;
END $$ 


-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	CREATE PROCEDURE insertar_elenco(
	    IN id_pelicula INT,
	    IN id_persona INT,
	    IN id_rol INT
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM elenco WHERE id_pelicula = id_pelicula AND id_persona = id_persona AND id_rol = id_rol) THEN
	        SIGNAL SQLSTATE '45000'
	        SET MESSAGE_TEXT = 'Error: Esta persona ya tiene este rol en esta película.';
	    ELSE
	        
	        INSERT INTO elenco (id_pelicula, id_persona, id_rol)
	        VALUES (id_pelicula, id_persona, id_rol);
	    END IF;
	END $$
    
    -- ==============================================================
-- ACTUALIZAR ELENCO
-- ==============================================================
CREATE PROCEDURE actualizar_elenco(
    IN id_p INT,
    IN nuevo_id_pelicula INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM elenco WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El elenco no existe.';
    ELSE
        UPDATE elenco
        SET id_pelicula = nuevo_id_pelicula
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR ELENCO
-- ==============================================================
CREATE PROCEDURE eliminar_elenco(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM elenco WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El elenco no existe.';
    ELSE
        DELETE FROM elenco
        WHERE id = id_p;
    END IF;
END $$ 


-- ==============================================================
-- INSERTAR DARTOS 
-- ==============================================================

	CREATE PROCEDURE insertar_pelicula_cine(
	    IN id_cine INT,
	    IN id_pelicula INT
	)
	BEGIN
	    
	    IF EXISTS (SELECT 1 FROM pelicula_cine WHERE id_cine = id_cine AND id_pelicula = id_pelicula) THEN
	        SIGNAL SQLSTATE '45000'
	        SET MESSAGE_TEXT = 'Error: Esta película ya está en este cine.';
	    ELSE
	       
	        INSERT INTO pelicula_cine (id_cine, id_pelicula)
	        VALUES (id_cine, id_pelicula);
	    END IF;
	END $$
    
-- ==============================================================
-- ACTUALIZAR PELÍCULA-CINE
-- ==============================================================
CREATE PROCEDURE actualizar_pelicula_cine(
    IN id_p INT,
    IN nuevo_id_pelicula INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La relación película-cine no existe.';
    ELSE
        UPDATE pelicula_cine
        SET id_pelicula = nuevo_id_pelicula
        WHERE id = id_p;
    END IF;
END $$ 

-- ==============================================================
-- ELIMINAR PELÍCULA-CINE
-- ==============================================================
CREATE PROCEDURE eliminar_pelicula_cine(
    IN id_p INT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La relación película-cine no existe.';
    ELSE
        DELETE FROM pelicula_cine
        WHERE id = id_p;
    END IF;
END $$ 

DELIMITER $$;