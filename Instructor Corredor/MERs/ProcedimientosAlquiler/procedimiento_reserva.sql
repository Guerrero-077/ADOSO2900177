-- ============================================================== 
-- ENTIDAD: reserva
-- ==============================================================

-- CREATE TABLE reserva (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_cliente INT NOT NULL,
--     id_vehiculo INT NOT NULL,
--     cantidad_hora INT NOT NULL,
--     FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id),
--     FOREIGN KEY (id_cliente) REFERENCES persona(id)
-- );


DELIMITER $$
-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR reserva
-- ==============================================================

    CREATE PROCEDURE insertar_reserva (
        id_cliente_p INT,
        id_vehiculo_p INT,
        cantidad_hora_p INT
    )
        BEGIN
            IF (SELECT COUNT(*) FROM reserva WHERE id_cliente = id_cliente_p AND id_vehiculo = id_vehiculo_p) > 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva ya existe';
                ELSE
                INSERT INTO reserva (id_cliente, id_vehiculo, cantidad_hora)
                VALUES (id_cliente_p, id_vehiculo_p, cantidad_hora_p);
            END IF;
        END $$     

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR reserva
-- ==============================================================
    CREATE PROCEDURE actualizar_reserva (
        IN id_p INT,
        id_cliente_p INT,
        id_vehiculo_p INT,
        cantidad_hora_p INT
    )
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM reserva WHERE id = id)THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva no existe';
            ELSE
                UPDATE reserva SET id_cliente = id_cliente_p, id_vehiculo = id_vehiculo_p, cantidad_hora = cantidad_hora_p WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR reserva
-- ==============================================================
    CREATE PROCEDURE eliminar_reserva (
        IN id_p INT
    )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM reserva WHERE id = id_p)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El reserva no existe';
                ELSE
                    DELETE FROM reserva WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR reserva PROCESO
-- ============================================================== 

    CREATE PROCEDURE insertar_reserva_proceso()   
    BEGIN 
        DECLARE reservaError VARCHAR(30);
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al insertar reserva, no se realizó la transacción.';

        END;
    
    START TRANSACTION;

    CALL insertar_reserva(1, 1, 1);
    CALL insertar_reserva(2, 2, 2);
    CALL insertar_reserva(3, 3, 3);
    CALL insertar_reserva(4, 4, 4);
    CALL insertar_reserva(5, 5, 5);

    CALL insertar_reserva(5, 2, 5);

    SET reservaError = 'Hola Mundo.';
    -- CALL insertar_reserva(reservaError, 2, 5);

        COMMIT;
    END $$

-- ============================================================== 
-- TRANSACTION: ACTURALIZAR reserva PROCESO
-- ============================================================== 
    CREATE PROCEDURE actualizar_reserva_proceso()
        BEGIN
            DECLARE reservaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar reserva, no se realizó la transacción.';
            END;
            
            START TRANSACTION;
                CALL actualizar_reserva(1, 1, 1, 3);
                CALL actualizar_reserva(2, 2, 2, 4);

                SET reservaError = 'Hola Mundo.';
                -- CALL actualizar_reserva(reservaError, 2, 2, 4);
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ELIMINAR reserva PROCESO
-- ============================================================== 
    CREATE PROCEDURE eliminar_reserva_proceso()
        BEGIN
            DECLARE reservaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar reserva, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_reserva(6);
            
            SET reservaError = 'Hola Mundo.';
            -- CALL eliminar_reserva(reservaError);

            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO reserva 
-- ============================================================== 
    CREATE PROCEDURE todo_poderoso_reserva()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de reserva, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_reserva_proceso();
            CALL actualizar_reserva_proceso();
            CALL eliminar_reserva_proceso();

            COMMIT;
                SELECT 'Transacción de reserva completada con éxito' AS resultado;
            
        END $$
DELIMITER $$