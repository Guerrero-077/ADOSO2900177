-- ============================================================== 
-- ENTIDAD: persona_concesionario
-- ==============================================================

-- CREATE TABLE persona_concesionario (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_persona INT NOT NULL,
--     id_concesionario INT NOT NULL,
--     fecha_visita DATE NOT NULL,
--     FOREIGN KEY (id_persona) REFERENCES persona(id),
--     FOREIGN KEY (id_concesionario) REFERENCES concesionario(id)
-- );



DELIMITER $$
-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR persona_concesionario
-- ==============================================================


    CREATE PROCEDURE insertar_persona_concesionario (
        IN id_persona_p INT,
        IN id_concesionario_p INT,
        IN fecha_visita_p DATE
    )
    BEGIN
        
        IF (SELECT COUNT(*) FROM persona_concesionario WHERE id_persona = id_persona_p AND id_concesionario = id_concesionario_p AND fecha_visita = fecha_visita_p) > 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La visita ya existe para esta fecha';
        ELSE
            INSERT INTO persona_concesionario (id_persona, id_concesionario, fecha_visita)
            VALUES (id_persona_p, id_concesionario_p, fecha_visita_p);
        END IF;
    END $$



-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR persona_concesionario
-- ==============================================================

    CREATE PROCEDURE actualizar_persona_concesionario (
        IN id_p INT,
        IN id_persona_p INT,
        IN id_concesionario_p INT,
        IN fecha_visita_p DATE
    )
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM persona_concesionario WHERE id = id_p) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La visita no existe';
        ELSE
            UPDATE persona_concesionario 
            SET id_persona = id_persona_p, id_concesionario = id_concesionario_p, fecha_visita = fecha_visita_p 
            WHERE id = id_p;
        END IF;
    END $$



-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR persona_concesionario
-- ==============================================================
    CREATE PROCEDURE eliminar_persona_concesionario (
        IN id_p INT
    )
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM persona_concesionario WHERE id = id_p) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso no existe';
        ELSE
            DELETE FROM persona_concesionario WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR persona_concesionario PROCESO
-- ==============================================================


    CREATE PROCEDURE insertar_persona_concesionario_proceso()   
    BEGIN 
        DECLARE persona_concesionarioError VARCHAR(30);
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al insertar persona concesionario, no se realizó la transacción.';

        END;

        START TRANSACTION;

        CALL insertar_persona_concesionario(1, 1, '2024-11-01');
        CALL insertar_persona_concesionario(2, 2, '2024-11-01');
        CALL insertar_persona_concesionario(3, 3, '2024-10-28');
        CALL insertar_persona_concesionario(4, 4, '2024-10-27');
        CALL insertar_persona_concesionario(5, 5, '2024-09-15');
        CALL insertar_persona_concesionario(5, 3, '2024-09-15');

        SET persona_concesionarioError = 'Hola Mundo';
        -- CALL insertar_persona_concesionario(persona_concesionarioError, 3, '2024-09-15');

        COMMIT;
    END $$



-- ============================================================== 
-- TRANSACTION: ACTUALIZAR persona_concesionario PROCESO
-- ==============================================================   
    CREATE PROCEDURE actualizar_persona_concesionario_proceso()
    BEGIN
        DECLARE persona_concesionarioError VARCHAR(30);
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al actualizar persona concesionario, no se realizó la transacción.';
        END;
        
        START TRANSACTION;
        CALL actualizar_persona_concesionario(1, 1, 1, '2024-11-10');
        CALL actualizar_persona_concesionario(2, 2, 2, '2024-11-11');

        SET persona_concesionarioError = 'Hola Mundo';
        -- CALL actualizar_persona_concesionario(persona_concesionarioError, 2, 2, '2024-11-11');
        
        COMMIT;
    END $$



-- ============================================================== 
-- TRANSACTION: ELIMINAR persona_concesionario PROCESO
-- ==============================================================
    CREATE PROCEDURE elimianr_persona_concesionario_proceso()
        BEGIN
            DECLARE persona_concesionarioError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar persona concesionario, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_persona_concesionario(6);

            SET persona_concesionarioError = 'Hola Mundo';
            -- CALL eliminar_persona_concesionario(persona_concesionarioError);

            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO persona_concesionario 
-- ==============================================================
    CREATE PROCEDURE todo_poderoso_persona_concesionario()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de persona concesionario, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_persona_concesionario_proceso();
            CALL actualizar_persona_concesionario_proceso();
            CALL elimianr_persona_concesionario_proceso();

            COMMIT;

                SELECT 'Transacción de persona concesionario completada con éxito' AS resultado;

        END $$

DELIMITER ;
