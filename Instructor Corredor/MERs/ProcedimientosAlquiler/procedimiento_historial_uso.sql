-- ============================================================== 
-- ENTIDAD: historialUso
-- ==============================================================

-- CREATE TABLE historialUso (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_vehiculo INT NOT NULL,
--     id_cliente INT NOT NULL,
--     fecha_uso DATE NOT NULL,
--     FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id),
--     FOREIGN KEY (id_cliente) REFERENCES persona(id)
-- );

DELIMITER $$
-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR historialUso
-- ==============================================================

    CREATE PROCEDURE insertar_historial_uso (
        IN id_vehiculo_p INT,
        IN id_cliente_p INT,
        IN fecha_uso_p DATE
    )
    BEGIN
        -- Verifica si el vehículo ya ha sido registrado en la misma fecha
        IF (SELECT COUNT(*) FROM historialUso WHERE id_vehiculo = id_vehiculo_p AND id_cliente = id_cliente_p AND fecha_uso = fecha_uso_p ) > 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso ya existe para esta fecha';
        ELSE
            -- Inserta un nuevo registro si no existe
            INSERT INTO historialUso (id_vehiculo, id_cliente, fecha_uso)
            VALUES (id_vehiculo_p, id_cliente_p, fecha_uso_p);
        END IF;
    END $$


-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR historialUso
-- ==============================================================
    CREATE PROCEDURE actualizar_historial_uso (
        IN id_p INT,
        IN id_vehiculo_p INT,
        IN id_cliente_p INT,
        IN fecha_uso_p DATE
    )
    BEGIN
        -- Verifica si el registro existe
        IF NOT EXISTS(SELECT 1 FROM historialUso WHERE id = id_p) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso no existe';
        ELSE
            -- Actualiza el registro
            UPDATE historialUso SET id_vehiculo = id_vehiculo_p, id_cliente = id_cliente_p, fecha_uso = fecha_uso_p WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR historialUso
-- ==============================================================
    CREATE PROCEDURE eliminar_historial_uso (
        IN id_p INT
    )
    BEGIN
        -- Verifica si el registro existe
        IF NOT EXISTS(SELECT 1 FROM historialUso WHERE id = id_p) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El historial de uso no existe';
        ELSE
            -- Elimina el registro
            DELETE FROM historialUso WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR historialUso PROCESO
-- ==============================================================
    CREATE PROCEDURE insertar_historial_uso_proceso()   
        BEGIN 
        DECLARE historialUsoErro VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                    SELECT 'Error: Error al insertar historial de Uso, no se realizó la transacción.';

            END;

            START TRANSACTION;

            CALL insertar_historial_uso(1, 1, '2024-11-01');
            CALL insertar_historial_uso(2, 2, '2024-11-01');
            CALL insertar_historial_uso(3, 3, '2024-10-28');
            CALL insertar_historial_uso(4, 4, '2024-10-27');
            CALL insertar_historial_uso(5, 5, '2024-09-15');
            CALL insertar_historial_uso(5, 3, '2024-09-15');

            SET historialUsoErro = 'Hola Mundo';
            -- CALL insertar_historial_uso(historialUsoErro, 3, '2024-09-15');

            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ACTUALIZAR historialUso PROCESO
-- ==============================================================
    CREATE PROCEDURE actualizar_historial_uso_proceso()
        BEGIN
            DECLARE historialUsoErro VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar historial de Uso, no se realizó la transacción.';
            END;
            
            START TRANSACTION;
            CALL actualizar_historial_uso(1, 1, 1, '2024-11-10');
            CALL actualizar_historial_uso(2, 2, 2, '2024-11-11');

            SET historialUsoErro = 'Hola Mundo';
            -- CALL actualizar_historial_uso(historialUsoErro, 2, 2, '2024-11-11');
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ELIMINAR historialUso PROCESO
-- ==============================================================
    CREATE PROCEDURE eliminar_historial_uso_proceso()
        BEGIN
            DECLARE historialUsoErro VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar historial de Uso, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_historial_uso(6);

            SET historialUsoErro = 'Hola Mundo';
            -- CALL eliminar_historial_uso(historialUsoErro);

            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO historialUso 
-- ==============================================================
CREATE PROCEDURE todo_poderoso_historial_uso()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las factura, ninguna operación se realizó.';

            END;

            START TRANSACTION;

            CALL insertar_historial_uso_proceso();
            CALL actualizar_historial_uso_proceso();
            CALL eliminar_historial_uso_proceso();

            COMMIT;
                SELECT 'Transacción de historial de Uso completada con éxito' AS resultado;

        END $$

DELIMITER ;
