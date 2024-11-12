-- ============================================================== 
-- ENTIDAD: metodoPago
-- ==============================================================

-- CREATE TABLE metodoPago (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     metodo VARCHAR(50) NOT NULL
-- );


DELIMITER $$
-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR metodoPago
-- ==============================================================

    CREATE PROCEDURE insertar_metodo_pago (
        IN metodo_p VARCHAR(50)
    )
        BEGIN
            IF (SELECT COUNT(*) FROM metodoPago WHERE metodo = metodo_p) > 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El metodo de pago ya existe';
                ELSE
                INSERT INTO metodoPago (metodo)
                VALUES (metodo_p);
            END IF;
        END $$     

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR metodoPago
-- ==============================================================
    CREATE PROCEDURE actualizar_metodo_pago (
        IN id_p INT,
        IN metodo_p VARCHAR(50)

    )
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM metodoPago WHERE id = id)THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El metodo de pago no existe';
            ELSE
                UPDATE metodoPago SET metodo = metodo_p WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR metodoPago
-- ==============================================================
    CREATE PROCEDURE eliminar_metodo_pago (
        IN id_p INT
    )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM metodoPago WHERE id = id_p)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El metodoPago no existe';
                ELSE
                    DELETE FROM metodoPago WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR metodoPago PROCESO
-- ============================================================== 

    CREATE PROCEDURE insertar_metodo_pago_proceso()   
    BEGIN 
        DECLARE metodoPagoError INT;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
                    SELECT 'Error: Error al insertar metodos de pago, no se realizó la transacción.';

        END;
    
    START TRANSACTION;


    CALL insertar_metodo_pago('Tarjetas de débito y crédi');
    CALL insertar_metodo_pago('Tranferencia Banca');
    CALL insertar_metodo_pago('Nequi');
    CALL insertar_metodo_pago('Efectivo');
    CALL insertar_metodo_pago('Cheques');

    SET metodoPagoError = NULL;
    -- CALL insertar_metodo_pago(metodoPagoError);


        COMMIT;
    END $$

-- ============================================================== 
-- TRANSACTION: ACTURALIZAR metodoPago PROCESO
-- ============================================================== 
    CREATE PROCEDURE actualizar_metodo_pago_proceso()
        BEGIN
            DECLARE metodoPagoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar metodos de pago, no se realizó la transacción.';
            END;
            
            START TRANSACTION;
                CALL actualizar_metodo_pago(1, 'Tarjetas de débito y crédito');
                CALL actualizar_metodo_pago(2, 'Tranferencia Bancaria');

                SET metodoPagoError = 'Hola Mundo';
                -- CALL actualizar_metodo_pago(metodoPagoError, 'Tranferencia Bancaria');
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ELIMINAR metodoPago PROCESO
-- ============================================================== 
    CREATE PROCEDURE eliminar_metodo_pago_proceso()
        BEGIN
            DECLARE metodoPagoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                    SELECT 'Error: Error al eliminar metodos de pago, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_metodo_pago(5);
            SET metodoPagoError = 'Hola Mundo';
            -- CALL eliminar_metodo_pago(metodoPagoError);

            COMMIT;
        END $$

-- ============================================================== 
-- PROCEDIMIENTO: TODO PODEROSO metodoPago 
-- ============================================================== 
    CREATE PROCEDURE todo_poderoso_metodo_pago()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de los metodos de pago, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_metodo_pago_proceso();
            CALL actualizar_metodo_pago_proceso();
            CALL eliminar_metodo_pago_proceso();

            COMMIT;
                SELECT 'Transacción de metodos de pagos completada con éxito' AS resultado;

        END $$
DELIMITER $$