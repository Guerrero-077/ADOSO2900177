-- ============================================================== 
-- ENTIDAD: roles
-- ==============================================================

-- CREATE TABLE roles (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     rol VARCHAR(30) NOT NULL
-- );

DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR ROL
-- ==============================================================

    CREATE PROCEDURE insertar_rol(IN rol_p VARCHAR(30))
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM roles WHERE rol = rol_p) THEN
                INSERT INTO roles (rol) 
                VALUES (rol_p);
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El rol ya existe';
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR ROL
-- ==============================================================

    CREATE PROCEDURE actualizar_rol(IN id_p INT, IN rol_p VARCHAR(30))
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM roles WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El rol no existe';
            ELSE
                UPDATE roles
                SET rol = rol_p
                WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR ROL
-- ==============================================================

    CREATE PROCEDURE eliminar_rol(IN id_p INT)
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM roles WHERE id = id_p) THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Error: El rol no existe';
            ELSE
                DELETE FROM roles WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE ROLES
-- ==============================================================

CREATE PROCEDURE insertar_rol_proceso()
    BEGIN

        DECLARE rolError INT;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al insertar los roles, no se realizó la transacción.';
        
        END;

        START TRANSACTION;

        CALL insertar_rol('Protagonis');
        CALL insertar_rol('Atagonista');
        CALL insertar_rol('Actor Secundario');
        CALL insertar_rol('Director');
        CALL insertar_rol('Editor');
        
        SET rolError = NULL;
        CALL insertar_rol(rolError);
        COMMIT;
    END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE ROLES
-- ==============================================================

CREATE PROCEDURE actualizar_rol_proceso()
    BEGIN
        DECLARE rolError VARCHAR(30);

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al actualizar los roles, no se realizó la transacción.';
        
        END;

        START TRANSACTION;
        
        CALL actualizar_rol(1, 'Protagonista');
        CALL actualizar_rol(2, 'Antagonista');
        
        SET rolError = 'Hola Mundo';
        CALL actualizar_rol(rolError, 'Antagonista');

        
        COMMIT;
    END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE ROLES
-- ==============================================================

    CREATE PROCEDURE eliminar_rol_proceso()
        BEGIN
            DECLARE rolError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar los roles, no se realizó la transacción.';
            
            END;

            START TRANSACTION;
            
            CALL eliminar_rol(5);  

            SET rolError = 'Hola Mundo';
            -- CALL eliminar_rol(rolError);  
            
            COMMIT;
        END $$


-- ============================================================== 
-- TRANSACTION: TODO PODEROSO roles 
-- ==============================================================


    CREATE PROCEDURE todo_poderoso_roles()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                -- SIGNAL SQLSTATE '450
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las funciones, ninguna operación se realizó.';

            END;


            START TRANSACTION;

            CALL insertar_rol_proceso();
            CALL actualizar_rol_proceso();
            CALL eliminar_rol_proceso();

            COMMIT;
            -- SELECT * FROM roles;
                SELECT 'Transacción de roles completada con éxito' AS resultado;


        END $$

DELIMITER ;