    -- ============================================================== 
    -- ENTIDAD: factura
    -- ==============================================================

    -- CREATE TABLE factura (
    --     id INT PRIMARY KEY AUTO_INCREMENT,
    --     id_reserva INT NOT NULL,
    --     id_metodoPago INT NOT NULL,
    --     total DECIMAL(10, 2) NOT NULL,
    --     FOREIGN KEY (id_reserva) REFERENCES reserva(id),
    --     FOREIGN KEY (id_metodoPago) REFERENCES factura(id)
    -- );

    DELIMITER $$
    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR factura
    -- ==============================================================

        CREATE PROCEDURE insertar_factura (
            IN id_reserva_p INT,
            IN id_metodoPago_p INT,
            IN total_p DECIMAL(10, 2)
        )
            BEGIN
                    IF (SELECT COUNT(*) FROM factura WHERE id_reserva = id_reserva_p) > 0 THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La factura ya existe';
                    ELSE
                    INSERT INTO factura (id_reserva, id_metodoPago, total)
                    VALUES (id_reserva_p, id_metodoPago_p, total_p);
                END IF;
            END $$     

    -- ============================================================== 
    -- PROCEDIMIENTO: ACTUALIZAR factura
    -- ==============================================================
        CREATE PROCEDURE actualizar_factura (
            IN id_p INT,
            IN id_metodoPago_p INT,
            IN total_p DECIMAL(10, 2)

        )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM factura WHERE id = id)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La factura no existe';
                ELSE
                    UPDATE factura SET id_metodoPago = id_metodoPago_p, total = total_p WHERE id = id_p;
            END IF;
        END $$

    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR factura
    -- ==============================================================
        CREATE PROCEDURE eliminar_factura (
            IN id_p INT
        )
            BEGIN
                IF NOT EXISTS(SELECT 1 FROM factura WHERE id = id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El factura no existe';
                    ELSE
                        DELETE FROM factura WHERE id = id_p;
                END IF;
            END $$

    -- ============================================================== 
    -- TRANSACTION: INSERTAR factura PROCESO
    -- ============================================================== 

        CREATE PROCEDURE insertar_factura_proceso()   
        BEGIN 

            DECLARE facturaError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                    SELECT 'Error: Error al insertar factura, no se realizó la transacción.';
                
            END;
        
        START TRANSACTION;


        CALL insertar_factura(1, 1, 150000.00);
        CALL insertar_factura(2, 2, 500000.00);
        CALL insertar_factura(3, 3, 150000.00);
        CALL insertar_factura(4, 3, 75000.00);
        CALL insertar_factura(5, 4, 1750000.00);

        SET facturaError = 'Hola Mundo';
        -- CALL insertar_factura(facturaError, 1, 1750000.00);


            COMMIT;
        END $$

    -- ============================================================== 
    -- TRANSACTION: ACTURALIZAR factura PROCESO
    -- ============================================================== 
        CREATE PROCEDURE actualizar_factura_proceso()
            BEGIN
                DECLARE facturaError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al actualizar factura, no se realizó la transacción.';
                END;
                
                START TRANSACTION;
                CALL actualizar_factura(1,1, 1500000.00);
                CALL actualizar_factura(2,2, 5000000.00);

                SET facturaError = 'Hola Mundo';
                -- CALL actualizar_factura(facturaError,2, 5000000.00);
                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: ELIMINAR factura PROCESO
    -- ============================================================== 
        CREATE PROCEDURE eliminar_factura_proceso()
            BEGIN
                DECLARE facturaError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al eliminar factura, no se realizó la transacción.';
                END;

                START TRANSACTION;
                
                CALL eliminar_factura(5);

                SET facturaError = 'Hola Mundo';
                -- CALL eliminar_factura(facturaError);

                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: TODO PODEROSO factura 
    -- ============================================================== 
        CREATE PROCEDURE todo_poderoso_factura()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las factura, ninguna operación se realizó.';

                END;

                START TRANSACTION;

                CALL insertar_factura_proceso();
                CALL actualizar_factura_proceso();
                CALL eliminar_factura_proceso();

                COMMIT;
                SELECT 'Transacción de factura completada con éxito' AS resultado;
                
            END $$
    DELIMITER $$