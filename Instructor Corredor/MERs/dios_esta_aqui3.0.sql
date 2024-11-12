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
    estreno DATE NOT NULL,
    id_genero INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES genero(id)
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



-- ==============================================================
-- PROCEDIMIENTOS DE ALMACENADO 
-- ==============================================================

DELIMITER $$

-- ==============================================================
-- INSERTAR DATOS genero
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
-- ACTUALIZAR DATOS genero
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
    -- ELIMINAR DATOS genero
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
-- INSERTAR DATOS peliculas
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
-- ACTUALIZAR DATOS peliculas
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
-- ELIMINAR DATOS peliculas
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
-- INSERTAR DARTOS  persona
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
-- ACTUALIZAR DATOS persona
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
-- ELIMINAR DATOS persona
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
-- INSERTAR DARTOS roles
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
-- ACTUALIZAR DATOS roles
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
-- ELIMINAR DATOS roles
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
-- INSERTAR DARTOS cines
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
-- ACTUALIZAR DATOS cines
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
-- ELIMINAR DATOS cines
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
-- INSERTAR DARTOS funciones
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
-- ACTUALIZAR DATOS funciones
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
-- ELIMINAR DATOS funciones
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
-- INSERTAR DATOS elenco
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
-- ACTUALIZAR DATOS elenco
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
-- ELIMINAR DATOS elenco
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
-- INSERTAR DATO pelicula_cine
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


-- ==============================================================
-- TRANSACCIONES ACTUALIZAR GENERO
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE actualizar_generos_proceso()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al insertar géneros. Transacción revertida.';
    END;

    START TRANSACTION;
    

    CALL actualizar_genero(1, "Ficcion");
    CALL actualizar_genero(2, "Suspenso");
    
    COMMIT;
END $$

DELIMITER ;

-- ==============================================================
-- TRANSACCIONES ELIMINAR GENERO
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE eliminar_generos_proceso()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al eliminar géneros. Transacción revertida.';
    END;

    START TRANSACTION;
    

    CALL eliminar_genero(4);
    
    COMMIT;
    SELECT * FROM genero;
END $$

DELIMITER ;


-- ==============================================================
-- TRANSACCIONES INSERTAR GENERO
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE insertar_generos_proceso()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al insertar géneros. Transacción revertida.';
    END;

    START TRANSACTION;
    
    -- Llamadas para insertar géneros
    CALL insertar_genero('Acción');
    CALL insertar_genero('Animación');
    CALL insertar_genero('Drama');
    CALL insertar_genero('Terror');
    CALL insertar_genero('Comedia');

    
    CALL actualizar_generos_proceso();
    CALL eliminar_generos_proceso();
    COMMIT;
    
END $$

DELIMITER ;


-- ==============================================================
-- TRANSACCIONES ACTUALIZAR pelicula
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE actualizar_pelicula_proceso()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al insertar pelicula. Transacción revertida.';
    END;

    START TRANSACTION;
    

    -- ?
    CALL actualizar_pelicula(1, "Operación zombie");
    CALL actualizar_pelicula(2, "El Tiempo Que Tenemos");
    
    COMMIT;
END $$

DELIMITER ;

-- ==============================================================
-- TRANSACCIONES ELIMINAR GENERO
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE eliminar_pelicula_proceso()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al eliminar pelicula. Transacción revertida.';
    END;

    START TRANSACTION;
    

    CALL eliminar_pelicula(4);
    
    COMMIT;
    SELECT * FROM pelicula;
END $$

DELIMITER ;


-- ==============================================================
-- TRANSACCIONES INSERTAR PELICULA
-- ==============================================================


DELIMITER $$

CREATE PROCEDURE insertar_peliculas_proceso()
BEGIN
    DECLARE genero VARCHAR(30);

    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Ocurrió un problema al insertar películas. Transacción revertida.';
    END;

    START TRANSACTION;

    CALL insertar_pelicula('operacion zombi', '2024-11-07', 1);
    CALL insertar_pelicula('El tiempo que tenemo', '2024-11-08', 3);
    CALL insertar_pelicula('Código Traje Rojo', '2024-11-09', 5);
    CALL insertar_pelicula('La Patasola', '2024-11-09', 4);

    
    SET genero = "Dios mio";  
    CALL insertar_pelicula('Venon: El Último Baile', '2024-11-09', genero);


    actualizar_pelicula_proceso()

    eliminar_pelicula_proceso()
    
    COMMIT;
END $$

DELIMITER ;


-- ==============================================================
-- TRANSACCIONES TODO PODEROSO
-- ==============================================================

DELIMITER $$

CREATE PROCEDURE todo_poderoso()
BEGIN
    -- Llamar al procedimiento de inserción de géneros
    CALL insertar_generos_proceso();

    -- Llamar al procedimiento de inserción de películas
    CALL insertar_peliculas_proceso();
END $$

DELIMITER ;
