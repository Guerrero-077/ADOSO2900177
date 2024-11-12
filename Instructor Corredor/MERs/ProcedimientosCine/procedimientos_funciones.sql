

-- ============================================================== 
-- ENTIDAD: funciones 
-- ==============================================================
-- CREATE TABLE funciones (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_pelicula INT NOT NULL,
--     id_cine INT NOT NULL,
--     hora TIMESTAMP NOT NULL,
--     FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
--     FOREIGN KEY (id_cine) REFERENCES cines(id)
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR FUNCIÓN
-- ==============================================================

    CREATE PROCEDURE insertar_funcion(IN id_pelicula_p INT, IN id_cine_p INT, IN hora_p TIMESTAMP)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM funciones WHERE id_pelicula = id_pelicula_p AND id_cine = id_cine_p) THEN
                INSERT INTO funciones (id_pelicula, id_cine, hora) 
                VALUES (id_pelicula_p, id_cine_p, hora_p);
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La función ya existe';
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: EDITAR FUNCIÓN
-- ==============================================================


    CREATE PROCEDURE actualizar_funcion(IN id_pelicula_p INT, IN id_cine_p INT, IN nueva_hora TIMESTAMP)
        BEGIN
            IF EXISTS (SELECT 1 FROM funciones WHERE id_pelicula = id_pelicula_p AND id_cine = id_cine_p) THEN
                UPDATE funciones
                SET hora = nueva_hora
                WHERE id_pelicula = id_pelicula_p AND id_cine = id_cine_p;
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La función no existe';
            END IF;
        END $$ 
-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR FUNCIÓN
-- ==============================================================

    CREATE PROCEDURE eliminar_funcion(IN id_pelicula_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM funciones WHERE id = id_pelicula_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La función no existe';
            ELSE
                DELETE FROM funciones WHERE id = id_pelicula_p;
            END IF;
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE FUNCIONES
-- ==============================================================

    CREATE PROCEDURE insertar_funciones_proceso()
        BEGIN
            DECLARE funcionesError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar las funciones, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL insertar_funcion(1, 1, '2024-11-05 20:00:00');  
            CALL insertar_funcion(1, 2, '2024-11-06 18:30:00');  
            CALL insertar_funcion(2, 3, '2024-11-07 21:00:00');  
            CALL insertar_funcion(3, 1, '2024-11-08 22:00:00');  
            CALL insertar_funcion(3, 2, '2024-11-08 22:00:00');  

            SET funcionesError = "HOLA MUNDO!";
            -- CALL insertar_funcion(3, funcionesError, '2024-11-08 22:00:00');  

            
            COMMIT;

        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE FUNCIONES
-- ==============================================================

    CREATE PROCEDURE actualizar_funciones_proceso()
        BEGIN
            DECLARE funcionesError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar las funciones, no se realizó la transacción.';
            END;

            START TRANSACTION;
            CALL actualizar_funcion(1, 1, '2024-11-01 14:00:00');  
            CALL actualizar_funcion(1, 2,'2024-11-01 14:00:00');  

            SET funcionesError = "HOLA MUNDO!";
            -- CALL actualizar_funcion(funcionesError, 2,'2024-11-01 14:00:00');  
            
            COMMIT;
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE FUNCIONES
-- ==============================================================

    CREATE PROCEDURE eliminar_funciones_proceso()
        BEGIN
            DECLARE funcionesError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar las funciones, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_funcion(5);
            
            SET funcionesError = "HOLA MUNDO!";
            -- CALL eliminar_funcion(funcionesError);

        END $$


-- ============================================================== 
-- TRANSACTION: TODO PODEROSO funciones  
-- ==============================================================

    CREATE PROCEDURE todo_poderoso_funciones()
        BEGIN
            
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';
            END;

            START TRANSACTION;

            CALL insertar_funciones_proceso();
            CALL actualizar_funciones_proceso();
            CALL eliminar_funciones_proceso();

            COMMIT;
            SELECT 'Transacción de funciones completada con éxito' AS resultado;

        END $$
DELIMITER ;
