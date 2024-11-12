-- ============================================================== 
-- ENTIDAD: vehiculo
-- ==============================================================

-- CREATE TABLE vehiculo (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_tipo_vehiculo INT NOT NULL,
--     modelo VARCHAR(50) NOT NULL,
--     marca VARCHAR(50) NOT NULL,
--     estado BOOLEAN NOT NULL,
--     FOREIGN KEY (id_tipo_vehiculo) REFERENCES tipo_vehiculo(id)
-- );

DELIMITER $$
-- ============================================================== 
-- PROCEDIMIENTO: INSERTAR VEHICULO
-- ==============================================================

    CREATE PROCEDURE insertar_vehiculo (
        IN id_tipo_vehiculo_p INT,
        IN modelo_p VARCHAR(50),
        IN marca_p VARCHAR(50),
        IN estado_p BOOLEAN
    )
        BEGIN
            IF (SELECT COUNT(*) FROM vehiculo WHERE modelo = modelo_p AND marca = marca_p) > 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehiculo ya existe';
                ELSE
                INSERT INTO vehiculo (id_tipo_vehiculo, modelo, marca, estado)
                VALUES (id_tipo_vehiculo_p, modelo_p, marca_p, estado_p);
            END IF;
        END $$     

-- ============================================================== 
-- PROCEDIMIENTO: ACTUALIZAR VEHICULO
-- ==============================================================
    CREATE PROCEDURE actualizar_vehiculo (
        IN id_p INT,
        IN id_tipo_vehiculo_p INT,
        IN modelo_p VARCHAR(50),
        IN marca_p VARCHAR(50),
        IN estado_p BOOLEAN
    )
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM vehiculo WHERE id = id)THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehiculo no existe';
            ELSE
                UPDATE vehiculo SET id_tipo_vehiculo = id_tipo_vehiculo_p, modelo = modelo_p, marca = marca_p, estado = estado_p WHERE id = id_p;
        END IF;
    END $$

-- ============================================================== 
-- PROCEDIMIENTO: ELIMINAR VEHICULO
-- ==============================================================
    CREATE PROCEDURE eliminar_vehiculo (
        IN id_p INT
    )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM vehiculo WHERE id = id_p)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehiculo no existe';
                ELSE
                    DELETE FROM vehiculo WHERE id = id_p;
            END IF;
        END $$

-- ============================================================== 
-- TRANSACTION: INSERTAR VEHICULO PROCESO
-- ============================================================== 

    CREATE PROCEDURE insertar_vehiculo_proceso()   
    BEGIN 
        DECLARE vehiculoError INT;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            ROLLBACK;
            SELECT 'Error: Error al insertar vehiculo, no se realizó la transacción.';

        END;
    
    START TRANSACTION;
        CALL insertar_vehiculo(5, 'Ranger', 'Ford', true);
        CALL insertar_vehiculo(3, 'CBR', 'Honda', true);
        CALL insertar_vehiculo(4, 'Cross Country', 'Treek', true);
        CALL insertar_vehiculo(2, 'MX-5', 'Mazda', true);
        CALL insertar_vehiculo(1, 'Aveo', 'Chevrolet', true);
        CALL insertar_vehiculo(3, 'Ninja', 'Kawasaki', true);

        SET vehiculoError = NULL;
        -- CALL insertar_vehiculo(3, vehiculoError, 'Kawasaki', true);

        COMMIT;
    END $$

-- ============================================================== 
-- TRANSACTION: ACTURALIZAR VEHICULO PROCESO
-- ============================================================== 
    CREATE PROCEDURE actualizar_vehiculo_proceso()
        BEGIN
        DECLARE vehiculoError VARCHAR(30);

            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al actualizar vehiculo, no se realizó la transacción.';
            END;
            
            START TRANSACTION;
            CALL actualizar_vehiculo(1, 5, 'Ranger', 'Ford', faLse);
            CALL actualizar_vehiculo(2, 3, 'CBR', 'Honda', faLse);
            
            SET vehiculoError = 'Hola Mundo';
            -- CALL actualizar_vehiculo(2, vehiculoError, 'CBR', 'Honda', faLse);
            
            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: ELIMINAR VEHICULO PROCESO
-- ============================================================== 
    CREATE PROCEDURE eliminar_vehiculo_proceso()
        BEGIN
            DECLARE vehiculoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al eliminar vehiculo, no se realizó la transacción.';
            END;

            START TRANSACTION;
            
            CALL eliminar_vehiculo(6);

            SET vehiculoError = 'Hola Mundo';
            -- CALL eliminar_vehiculo(vehiculoError);

            COMMIT;
        END $$

-- ============================================================== 
-- TRANSACTION: TODO PODEROSO VEHICULO 
-- ============================================================== 
    CREATE PROCEDURE todo_poderoso_vehiculo()
        BEGIN
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de tipo de vehiculo, ninguna operación se realizó.';
                
                
            END;

            START TRANSACTION;

            CALL insertar_vehiculo_proceso();
            CALL actualizar_vehiculo_proceso();
            CALL eliminar_vehiculo_proceso();

            COMMIT;
                SELECT 'Transacción de vehiculo completada con éxito' AS resultado;
            
        END $$
DELIMITER $$