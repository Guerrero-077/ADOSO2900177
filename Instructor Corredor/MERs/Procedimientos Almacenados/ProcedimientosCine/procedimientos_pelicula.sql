-- ============================================================== 
-- ENTIDAD: pelicula
-- ==============================================================

-- CREATE TABLE peliculas (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     titulo VARCHAR(100) NOT NULL,
--     estreno DATE NOT NULL
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR PELÍCULA
-- ==============================================================

    CREATE PROCEDURE insertar_pelicula(IN titulo_p VARCHAR(100), IN estreno_p DATE)
        BEGIN
            IF EXISTS (SELECT 1 FROM peliculas WHERE titulo = titulo_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La película ya existe';
            ELSE
                INSERT INTO peliculas (titulo, estreno) 
                VALUES (titulo_p, estreno_p);
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR PELÍCULA
-- ==============================================================

    CREATE PROCEDURE actualizar_pelicula(IN id_p INT, IN titulo_p VARCHAR(100))
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM peliculas WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La película no existe';
            ELSE
                UPDATE peliculas
                SET titulo = titulo_p
                WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR PELÍCULA
-- ==============================================================

    CREATE PROCEDURE eliminar_pelicula(IN id_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM peliculas WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La película no existe';
            ELSE
                DELETE FROM peliculas WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE PELÍCULAS
-- ==============================================================

    CREATE PROCEDURE insertar_pelicula_proceso()
        BEGIN
            DECLARE peliculaError VARCHAR(30);

            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar las películas, no se realizó la transacción.';

            END;

            START TRANSACTION;

            CALL insertar_pelicula('operacion zombi', '2024-11-07');
            CALL insertar_pelicula('El tiempo que tenemo', '2024-11-08');
            CALL insertar_pelicula('Código Traje Rojo', '2024-11-09');
            CALL insertar_pelicula('La Patasola', '2024-11-09');
            CALL insertar_pelicula('Venon: El Último Baile', '2024-11-09');
            CALL insertar_pelicula('Avengers', '2020-11-09');
            
            SET peliculaError = "Hola Mundo!";  
            -- CALL insertar_pelicula('Venon: El Último Baile', peliculaError);
            
            COMMIT;

        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE PELÍCULAS
-- ==============================================================

    CREATE PROCEDURE actualizar_pelicula_proceso()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar las películas, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL actualizar_pelicula(1, 'Operaón Zombie');
            CALL actualizar_pelicula(2, 'El Tiempo Que Tenemos');
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE PELÍCULAS
-- ==============================================================

    CREATE PROCEDURE eliminar_pelicula_proceso()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar las películas, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_pelicula(6);
            
            COMMIT;
        END $$



-- ============================================================== 
-- TRANSACTION: TODO PODEROSO PELICULA
-- ==============================================================


    CREATE PROCEDURE todo_poderoso_pelicula()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
            SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_pelicula_proceso();
            CALL actualizar_pelicula_proceso();
            CALL eliminar_pelicula_proceso();

            COMMIT;
            SELECT 'Transacción de peliculas completada con éxito' AS resultado;

        END $$


DELIMITER ;