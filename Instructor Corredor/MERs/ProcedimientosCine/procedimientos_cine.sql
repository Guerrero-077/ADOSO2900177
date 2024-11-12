
-- ============================================================== 
-- ENTIDAD: cines
-- ==============================================================
-- CREATE TABLE cines (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     nombre VARCHAR(100) NOT NULL,
--     direccion VARCHAR(100) NOT NULL
-- );
DELIMITER $$

-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR CINE
-- ==============================================================

CREATE PROCEDURE insertar_cine(IN nombre_p VARCHAR(100), IN direccion_p VARCHAR(100))
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cines WHERE nombre = nombre_p AND direccion = direccion_p) THEN
        INSERT INTO cines (nombre, direccion) 
        VALUES (nombre_p, direccion_p);
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El cine ya existe';
    END IF;
END $$

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR CINE
-- ==============================================================

CREATE PROCEDURE actualizar_cine(IN id_p INT, IN nombre_p VARCHAR(100))
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cines WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El cine no existe';
    ELSE
        UPDATE cines
        SET nombre = nombre_p
        WHERE id = id_p;
    END IF;
END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR CINE
-- ==============================================================

CREATE PROCEDURE eliminar_cine(IN id_p INT)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cines WHERE id = id_p) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: El cine no existe';
    ELSE
        DELETE FROM cines WHERE id = id_p;
    END IF;
END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE INSERCIÓN DE CINES
-- ==============================================================

CREATE PROCEDURE insertar_cine_proceso()
BEGIN
    DECLARE cineError INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'Error: Error al insertar los cines, no se realizó la transacción.' AS resultado;

    END;

    START TRANSACTION;
    
    CALL insertar_cine('Cinemar', 'Calle 8 N.38');
    CALL insertar_cine('Royal Films', 'Calle 64 N. 64');
    CALL insertar_cine('Cinela', 'Calle 8 N.50');
    CALL insertar_cine('CinePrueba', 'Calle 8');

    SET cineError = NULL;
    -- CALL insertar_cine(cineError, 'Calle 8');
    
    COMMIT;

END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ACTUALIZACIÓN DE CINES
-- ==============================================================

CREATE PROCEDURE actualizar_cine_proceso()
BEGIN
    DECLARE cineError VARCHAR(30);

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'Error: Error al actualizar los cines, no se realizó la transacción.' AS resultado;

    END;

    START TRANSACTION;
    CALL actualizar_cine(1, 'Cinemark');
    CALL actualizar_cine(3, 'Cineland');

    SET cineError = 'Hola Mundo';
    -- CALL actualizar_cine(cineError, 'Cineland');
    
    COMMIT;

END $$

-- ============================================================== 
-- TRANSACTION: PROCESO DE ELIMINACIÓN DE CINES
-- ==============================================================

CREATE PROCEDURE eliminar_cine_proceso()
BEGIN
    DECLARE cineError VARCHAR(30);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'Error: Error al eliminar los cines, no se realizó la transacción.';
    END;

    START TRANSACTION;
    
    CALL eliminar_cine(4);  

    SET cineError = 'Hola Mundo';
    -- CALL eliminar_cine(cineError);  
    
    COMMIT;
END $$


-- ============================================================== 
-- TRANSACTION: TODO PODEROSO cine
-- ==============================================================

    CREATE PROCEDURE todo_poderoso_cine()
            BEGIN

                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones de cine, ninguna operación se realizó.' AS resultado;
                END;


                START TRANSACTION;

                CALL insertar_cine_proceso();
                CALL actualizar_cine_proceso();
                CALL eliminar_cine_proceso();

                COMMIT;
                SELECT 'Transacción de cine completada con éxito' AS resultado;
        END $$

DELIMITER ;
