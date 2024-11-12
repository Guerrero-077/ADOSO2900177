    -- ============================================================== 
    -- ENTIDAD: tipo_vehiculo
    -- ==============================================================

    -- CREATE TABLE tipo_vehiculo (
    --     id INT PRIMARY KEY AUTO_INCREMENT,
    --     tipo VARCHAR(50) NOT NULL,
    --     valor_hora DECIMAL(10, 2) NOT NULL
    -- );

    DELIMITER $$
    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR TIPO DE VEHICULO
    -- ==============================================================
        CREATE PROCEDURE insertar_tipo_vehiculo (
            IN tipo_vehiculo_p VARCHAR(50),
            IN valor_hora_p DECIMAL(10, 2)
        )
            BEGIN
                IF (SELECT COUNT(*) FROM tipo_vehiculo WHERE tipo = tipo_vehiculo_p) > 0 THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo ya existe';
                    ELSE
                        INSERT INTO tipo_vehiculo (tipo, valor_hora) 
                                        VALUES (tipo_vehiculo_p, valor_hora_p);
                END IF;
            END $$     

    -- ============================================================== 
    -- PROCEDIMIENTO: ACTUALIZAR TIPO DE VEHICULO
    -- ==============================================================
        CREATE PROCEDURE actualizar_tipo_vehiculo (
            IN id_p INT,
            IN tipo_vehiculo_p VARCHAR(50),
            IN valor_hora_p DECIMAL(10, 2)
        )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM tipo_vehiculo WHERE id = id)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo no existe';
                ELSE
                    UPDATE tipo_vehiculo SET tipo = tipo_vehiculo_p, valor_hora = valor_hora_p WHERE id = id_p;
            END IF;
        END $$

    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR TIPO DE VEHICULO
    -- ==============================================================
        CREATE PROCEDURE eliminar_tipo_vehiculo (
            IN id_p INT
        )
            BEGIN
                IF NOT EXISTS(SELECT 1 FROM tipo_vehiculo WHERE id = id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de vehiculo no existe';
                    ELSE
                        DELETE FROM tipo_vehiculo WHERE id = id_p;
                END IF;
            END $$

    -- ============================================================== 
    -- TRANSACTION: INSERTAR TIPO DE VEHICULO PROCESO
    -- ============================================================== 

        CREATE PROCEDURE insertar_tipo_vehiculo_proceso()   
        BEGIN 
            DECLARE tipo_vehiculoError INT;
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                SELECT 'Error: Error al insertar tipo de vehiculo, no se realizó la transacción.';

            END;
        
        START TRANSACTION;
            CALL insertar_tipo_vehiculo('Sedan', 1500000.00);
            CALL insertar_tipo_vehiculo('Deportivo', 2500000.00);
            CALL insertar_tipo_vehiculo('Moto', 500000.00);
            CALL insertar_tipo_vehiculo('Bicicleta', 20000.00);
            CALL insertar_tipo_vehiculo('Camioneta', 3000000.00);
            CALL insertar_tipo_vehiculo('Camion', 4000000.00);

            SET tipo_vehiculoError = NULL;
            -- CALL insertar_tipo_vehiculo(tipo_vehiculoError, 4000000.00);

            COMMIT;
        END $$

    -- ============================================================== 
    -- TRANSACTION: ACTURALIZAR TIPO DE VEHICULO PROCESO
    -- ============================================================== 
        CREATE PROCEDURE actualizar_tipo_vehiculo_proceso()
            BEGIN
                DECLARE tipo_vehiculoError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al actualizar tipo de vehiculo, no se realizó la transacción.';
                END;
                
                START TRANSACTION;
                CALL actualizar_tipo_vehiculo(1, 'Sedan', 2000000.00);
                CALL actualizar_tipo_vehiculo(2, 'Deportivo', 3000000.00);
                
                SET tipo_vehiculoError = 'Hola Mundo';
                -- CALL actualizar_tipo_vehiculo(tipo_vehiculoError, 'Deportivo', 3000000.00);
                
                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: ELIMINAR TIPO DE VEHICULO PROCESO
    -- ============================================================== 
        CREATE PROCEDURE eliminar_tipo_vehiculo_proceso()
            BEGIN
                DECLARE tipo_vehiculoError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al eliminar tipo de vehiculo, no se realizó la transacción.';
                END;

                START TRANSACTION;
                
                CALL eliminar_tipo_vehiculo(6);

                SET tipo_vehiculoError = 'Hola Mundo';
                -- CALL eliminar_tipo_vehiculo(tipo_vehiculoError);

                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: TODO PODEROSO TIPO DE VEHICULO 
    -- ============================================================== 
        CREATE PROCEDURE todo_poderoso_tipo_vehiculo()
            BEGIN
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Ha ocurrido un problema con las transacciones de tipo de vehiculo, ninguna operación se realizó.';

                END;

                START TRANSACTION;

                CALL insertar_tipo_vehiculo_proceso();
                CALL actualizar_tipo_vehiculo_proceso();
                CALL eliminar_tipo_vehiculo_proceso();

                COMMIT;
                    SELECT 'Transacción de tipo de vehiculo completada con éxito' AS resultado;
                
            END $$
    DELIMITER $$