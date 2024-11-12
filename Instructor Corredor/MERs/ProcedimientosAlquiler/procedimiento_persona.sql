-- ============================================================== 
-- ENTIDAD: persona
-- ==============================================================

-- CREATE TABLE persona (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     nombre VARCHAR(50) NOT NULL,
--     apellido VARCHAR(50) NOT NULL,
--     telefono VARCHAR(10) NOT NULL,
--     correo VARCHAR(100) NOT NULL
-- );


DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR PERSONA
-- ==============================================================

    CREATE PROCEDURE insertar_persona(
        IN nombre_P VARCHAR(50), 
        IN apellido_P VARCHAR(50), 
        IN telefono_P VARCHAR(10), 
        IN correo_P VARCHAR(100)
    )

    BEGIN 
        IF (SELECT COUNT(*) FROM persona WHERE telefono = telefono_P AND correo = correo_P) > 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Persona ya existe';
            ELSE
                INSERT INTO persona (nombre, apellido, telefono, correo) 
                        VALUES (nombre_P, apellido_P, telefono_P, correo_P);
        END IF;

    END $$

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR PERSONA
-- ==============================================================    

    CREATE PROCEDURE actualizar_persona(
        IN id_P INT,
        IN nombre_P VARCHAR(50),
        IN apellido_P VARCHAR(50),
        IN telefono_P VARCHAR(10),
        IN correo_P VARCHAR(100)
    )

    BEGIN
        IF NOT EXISTS( SELECT 1 FROM persona WHERE id = id_P ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Persona no existe';
            ELSE
                UPDATE persona SET nombre = nombre_P, apellido = apellido_P, telefono = telefono_P, correo = correo_P WHERE id = id_P;
        END IF;
    END $$


-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR PERSONA
-- ============================================================== 

    CREATE PROCEDURE eliminar_persona(
        IN id_P INT
    )
    BEGIN
        IF EXISTS( SELECT 1 FROM persona WHERE id = id_P ) THEN
            DELETE FROM persona WHERE id = id_P;
            ELSE
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Persona no existe';
        END IF;

    END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR PERSONA PROCESO
-- ============================================================== 

    CREATE PROCEDURE insertar_persona_proceso()
    BEGIN
        DECLARE personaError INT;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION 
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al insertar persona, no se realizó la transacción.';

        END;
        
        START TRANSACTION;

        CALL insertar_persona('Brayan Santiago', 'Guerrero', '1023456789', 'santiago@gmail.com' );
        CALL insertar_persona('Ingrid Yulissa', 'Medina', '1203456789', 'ingrid@gmail.com');
        CALL insertar_persona('Juan Manuel', 'Gutierrez', '1230456789', 'juan@gmail.com');
        CALL insertar_persona('Linda Maria', 'Ramirez', '1234056789', 'linda@gmail.com');
        CALL insertar_persona('Laura Valentina', 'Morales', '1234506789', 'laura@gmail.com');
        CALL insertar_persona('Laura', 'Morales Villa', '12345060789', 'valen@gmail.com'); 
        SET personaError = NULL;
        -- CALL insertar_persona('personaError', 'Morales Villa', '12345060789', 'valen@gmail.com'); 

        COMMIT;

    END $$

-- ============================================================== 
-- TRANSACTION: ACTUALIZAR PERSONA PROCESO
-- ============================================================== 

    CREATE PROCEDURE actualizar_persona_proceso()
        BEGIN
            DECLARE personaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar persona, no se realizó la transacción.';
            END;

            START TRANSACTION;

            CALL actualizar_persona(1, 'Brayan Santiago', 'Guerrero Mendez', '1023456789', 'santiago@gmail.com');
            CALL actualizar_persona(2, 'Ingrid Yulissa', 'Medina Esquivel', '1203456789', 'ingrid@gmail.com');

            SET personaError = 'Hola Mundo';
            -- CALL actualizar_persona(personaError, 'Ingrid Yulissa', 'Medina Esquivel', '1203456789', 'ingrid@gmail.com');


            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ELIMIANR PERSONA PROCESO
-- ============================================================== 

    CREATE PROCEDURE eliminar_persona_proceso()
        BEGIN
            DECLARE personaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar persona, no se realizó la transacción.';
            END;

            START TRANSACTION;
            CALL eliminar_persona(6);

            SET personaError = 'Hola Mundo';
            -- CALL eliminar_persona(personaError);

            COMMIT;
            
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO PERSONA 
-- ============================================================== 

    CREATE PROCEDURE todo_poderoso_persona()
    BEGIN
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
        ROLLBACK;
        SELECT 'Error: Ha ocurrido un problema con las transacciones de persona, ninguna operación se realizó.';

        END;

        START TRANSACTION;

        CALL insertar_persona_proceso();
        CALL actualizar_persona_proceso();
        CALL eliminar_persona_proceso();

        COMMIT;
    SELECT 'Transacción de persona completada con éxito' AS resultado;


    END $$

DELIMITER $$
