-- ============================================================== 
-- ENTIDAD: persona
-- ==============================================================
-- CREATE TABLE persona (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     nombre VARCHAR(100) NOT NULL
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR PERSONA
-- ==============================================================

    CREATE PROCEDURE insertar_persona(IN nombre_p VARCHAR(100))
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM persona WHERE nombre = nombre_p) THEN
                INSERT INTO persona (nombre) 
                VALUES (nombre_p);
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La persona ya existe';
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR PERSONA
-- ==============================================================

    CREATE PROCEDURE actualizar_persona(IN id_p INT, IN nombre_p VARCHAR(100))
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM persona WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La persona no existe';
            ELSE
                UPDATE persona
                SET nombre = nombre_p
                WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR PERSONA
-- ==============================================================

    CREATE PROCEDURE eliminar_persona(IN id_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM persona WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: La persona no existe';
            ELSE
                DELETE FROM persona WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE PERSONAS
-- ==============================================================

    CREATE PROCEDURE insertar_persona_proceso()
        BEGIN
            DECLARE personaError INT;
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar las personas, no se realizó la transacción.';

            END;

            START TRANSACTION;

            CALL insertar_persona('Kongkiat Komsiri.');
            CALL insertar_persona('Andrew Garfie');
            CALL insertar_persona('Dwayne Johnson');
            CALL insertar_persona('Robinson Díaz');
            CALL insertar_persona('Tom Hardy');
            CALL insertar_persona('Tom Holland');


            SET personaError = NULL;
            -- CALL insertar_persona(personaError);
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE PERSONAS
-- ==============================================================

    CREATE PROCEDURE actualizar_persona_proceso()
        BEGIN
            DECLARE personaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar las personas, no se realizó la transacción.';

            END;

            START TRANSACTION;
            
            CALL actualizar_persona(1, 'Kongkiat Khomsiri');
            CALL actualizar_persona(2, 'Andrew Garfield');

            SET personaError = 'Hola';
            -- CALL actualizar_persona(personaError, 'Andrew Garfield');
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE PERSONAS
-- ==============================================================

    CREATE PROCEDURE eliminar_persona_proceso()
        BEGIN
            DECLARE personaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar las personas, no se realizó la transacción.';
            END;

            START TRANSACTION;

            CALL eliminar_persona(6);

            SET personaError = 'Hola';
            -- CALL eliminar_persona(personaError);
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO persona
-- ==============================================================


    CREATE PROCEDURE todo_poderoso_persona()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

            END;

            START TRANSACTION;
            CALL insertar_persona_proceso();
            CALL actualizar_persona_proceso();
            CALL eliminar_persona_proceso();

            COMMIT;
            SELECT 'Transacción de persona completada con éxito' AS resultado;
        END $$

DELIMITER ;
