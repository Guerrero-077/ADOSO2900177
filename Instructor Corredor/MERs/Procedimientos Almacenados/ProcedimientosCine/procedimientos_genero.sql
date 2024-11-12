-- ============================================================== 
-- ENTIDAD: genero
-- ==============================================================

-- CREATE TABLE genero (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     tipo_genero VARCHAR(30) NOT NULL
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR GÉNERO
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
-- PROCEDIMIENTO: ACTUALIZAR GÉNERO
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
-- PROCEDIMIENTO: ELIMINAR GÉNERO
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
-- TRANSACTION: PROCESO DE INSERCIÓN DE GÉNEROS
-- ==============================================================

    CREATE PROCEDURE insertar_genero_proceso()
        BEGIN
        DECLARE generoError INT;
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar los géneros, no se realizó la transacción.';

            END;

            START TRANSACTION;
            
            CALL insertar_genero('Acción');
            CALL insertar_genero('Animación');
            CALL insertar_genero('Drama');
            CALL insertar_genero('Terror');
            CALL insertar_genero('Comedia');
            CALL insertar_genero('Romance');

            SET generoError = NULL;
            -- CALL insertar_genero(generoError);
            
            COMMIT;

        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE GÉNEROS
-- ==============================================================

    CREATE PROCEDURE actualizar_genero_proceso()
        BEGIN
            DECLARE generoError VARCHAR(10);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ocurrió un problema al insertar géneros. Transacción revertida.';
            END;

            START TRANSACTION;
            

            CALL actualizar_genero(1, "Ficcion");
            CALL actualizar_genero(2, "Suspenso");

            SET generoError = 'Hola Mundo';
            -- CALL actualizar_genero(generoError, "Suspenso");
            
            COMMIT;
        
        END $$


-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE GÉNEROS
-- ==============================================================

    CREATE PROCEDURE eliminar_genero_proceso()
        BEGIN
            DECLARE generoError VARCHAR(10);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ocurrió un problema al eliminar géneros. Transacción revertida.';
            END;

            START TRANSACTION;
            

            CALL eliminar_genero(6);

            SET generoError = 'Hola Mundo';
            -- CALL eliminar_genero(generoError);
            
            COMMIT;
        END $$


-- ============================================================== 
-- TRANSACTION: TODO PODEROSO GENERO
-- ==============================================================

    CREATE PROCEDURE todo_poderoso_genero()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_genero_proceso();
            CALL actualizar_genero_proceso();
            CALL eliminar_genero_proceso();

            COMMIT;
            SELECT 'Transacción de generos completada con éxito' AS resultado;

        END $$

DELIMITER ;


