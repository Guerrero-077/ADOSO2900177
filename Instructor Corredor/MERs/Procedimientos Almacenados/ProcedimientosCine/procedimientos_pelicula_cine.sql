-- ============================================================== 
-- ENTIDAD: pelicula_cine
-- ==============================================================

-- CREATE TABLE pelicula_cine (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_cine INT NOT NULL,
--     id_pelicula INT NOT NULL,
--     FOREIGN KEY (id_cine) REFERENCES cines(id),
--     FOREIGN KEY (id_pelicula) REFERENCES peliculas(id)
-- );

    DELIMITER $$

    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE insertar_pelicula_cine(IN id_cine_p INT, IN id_pelicula_p INT)
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id_cine = id_cine_p AND id_pelicula = id_pelicula_p) THEN
            INSERT INTO pelicula_cine (id_cine, id_pelicula) 
            VALUES (id_cine_p, id_pelicula_p);
        ELSE
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Error: La película ya está asociada con el cine';
        END IF;
    END $$


    -- ============================================================== 
    -- PROCEDIMIENTO: EDITAR PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE actualizar_pelicula_cine(IN id_cine_p INT, IN id_pelicula_actual_p INT, IN nueva_id_pelicula_p INT)
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id_cine = id_cine_p AND id_pelicula = id_pelicula_actual_p) THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Error: La película no está asociada con el cine';
        ELSE
            UPDATE pelicula_cine
            SET id_pelicula = nueva_id_pelicula_p 
            WHERE id_cine = id_cine_p AND id_pelicula = id_pelicula_actual_p;
        END IF;
    END $$
    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE eliminar_pelicula_cine(IN id_pelicula_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM pelicula_cine WHERE id = id_pelicula_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La película no está asociada con el cine';
            ELSE
                DELETE FROM pelicula_cine WHERE id = id_pelicula_p;
            END IF;
        END $$ 


    -- ============================================================== 
    -- TRANSACTION: PROCESO DE INSERCIÓN DE PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE insertar_pelicula_cine_proceso()
        BEGIN

        DECLARE peliculaCineError INT;
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar la película en el cine, no se realizó la transacción.';

            END;

            START TRANSACTION;
            
            CALL insertar_pelicula_cine(1, 1);  
            CALL insertar_pelicula_cine(1, 2);  
            CALL insertar_pelicula_cine(2, 3);  
            CALL insertar_pelicula_cine(3, 4);  
            CALL insertar_pelicula_cine(3, 1);  

            SET peliculaCineError = NULL;
            -- CALL insertar_pelicula_cine(peliculaCineError, 3);  
            
            COMMIT;
        END $$

    -- ============================================================== 
    -- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE actualizar_pelicula_cine_proceso()
        BEGIN
            DECLARE peliculaCineError VARCHAR(10);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar la película en el cine, no se realizó la transacción.';
            END;

            START TRANSACTION;
            CALL actualizar_pelicula_cine(1, 2, 2);
            CALL actualizar_pelicula_cine(1, 1, 4);

            SET peliculaCineError = 'Hola Mundo';
            -- CALL actualizar_pelicula_cine(peliculaCineError, 1, 4);

            COMMIT;

        END $$

    -- ============================================================== 
    -- TRANSACTION: PROCESO DE ELIMINACIÓN DE PELÍCULA CINE
    -- ==============================================================

    CREATE PROCEDURE eliminar_pelicula_cine_proceso()
        BEGIN
            DECLARE peliculaCineError VARCHAR(10);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar la película del cine, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_pelicula_cine(5);  

            SET peliculaCineError = 'Hola Mundo';
            CALL eliminar_pelicula_cine(peliculaCineError);  
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO pelicula cine
-- ==============================================================

        CREATE PROCEDURE todo_poderoso_pelicula_cine()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

                END;

                START TRANSACTION;

                CALL insertar_pelicula_cine_proceso();
                CALL actualizar_pelicula_cine_proceso();
                CALL eliminar_pelicula_cine_proceso();

                COMMIT;
            SELECT 'Transacción de pelicula cine completada con éxito' AS resultado;

            END $$

    DELIMITER ;