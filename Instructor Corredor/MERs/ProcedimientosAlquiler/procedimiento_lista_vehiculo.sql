    -- ============================================================== 
    -- ENTIDAD: listaVehiculo
    -- ==============================================================

-- CREATE TABLE listaVehiculo (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     id_concesionario INT NOT NULL,
--     id_vehiculo INT NOT NULL,
--     FOREIGN KEY (id_concesionario) REFERENCES concesionario(id),
--     FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id)
-- );

    DELIMITER $$
    -- ============================================================== 
    -- PROCEDIMIENTO: INSERTAR listaVehiculo
    -- ==============================================================

        CREATE PROCEDURE insertar_lista_vehiculo (
            IN id_concesionario_p INT,
            IN id_vehiculo_p INT
        )
            BEGIN
                    IF (SELECT COUNT(*) FROM listaVehiculo WHERE id_concesionario = id_concesionario_p AND  id_vehiculo = id_vehiculo_p) > 0 THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo ya existe';
                    ELSE
                    INSERT INTO listaVehiculo (id_concesionario, id_vehiculo)
                    VALUES (id_concesionario_p, id_vehiculo_p);
                END IF;
            END $$     

    -- ============================================================== 
    -- PROCEDIMIENTO: ACTUALIZAR listaVehiculo
    -- ==============================================================
        CREATE PROCEDURE actualizar_lista_vehiculo (
            IN id_p INT,
            IN id_concesionario_p INT,
            IN id_vehiculo_p INT

        )
        BEGIN
            IF NOT EXISTS(SELECT 1 FROM listaVehiculo WHERE id = id)THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La listaVehiculo no existe';
                ELSE
                    UPDATE listaVehiculo SET id_concesionario = id_concesionario_p, id_vehiculo = id_vehiculo_p WHERE id = id_p;
            END IF;
        END $$

    -- ============================================================== 
    -- PROCEDIMIENTO: ELIMINAR listaVehiculo
    -- ==============================================================
        CREATE PROCEDURE eliminar_lista_vehiculo (
            IN id_p INT
        )
            BEGIN
                IF NOT EXISTS(SELECT 1 FROM listaVehiculo WHERE id = id_p)THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El listaVehiculo no existe';
                    ELSE
                        DELETE FROM listaVehiculo WHERE id = id_p;
                END IF;
            END $$

    -- ============================================================== 
    -- TRANSACTION: INSERTAR listaVehiculo PROCESO
    -- ============================================================== 

        CREATE PROCEDURE insertar_lista_vehiculo_proceso()   
        BEGIN 
            DECLARE listaVehiculoError VARCHAR(30);
            DECLARE EXIT HANDLER FOR SQLEXCEPTION
            BEGIN
                ROLLBACK;
                    SELECT 'Error: Error al insertar lista de Vehiculo, no se realizó la transacción.';

            END;
        
        START TRANSACTION;


        CALL insertar_lista_vehiculo(1, 1);
        CALL insertar_lista_vehiculo(2, 2);
        CALL insertar_lista_vehiculo(3, 3);
        CALL insertar_lista_vehiculo(4, 3);
        CALL insertar_lista_vehiculo(5, 4);

        CALL insertar_lista_vehiculo(5, 3);

        SET listaVehiculoError = 'Hola Mundo';
        -- CALL insertar_lista_vehiculo(listaVehiculoError, 3);


            COMMIT;
        END $$

    -- ============================================================== 
    -- TRANSACTION: ACTURALIZAR listaVehiculo PROCESO
    -- ============================================================== 
        CREATE PROCEDURE actualizar_lista_vehiculo_proceso()
            BEGIN
                DECLARE listaVehiculoError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al actualizar lista de Vehiculo, no se realizó la transacción.';
                END;
                
                START TRANSACTION;
                CALL actualizar_lista_vehiculo(1,1, 1);
                CALL actualizar_lista_vehiculo(2,2, 1);

                SET listaVehiculoError = 'Hola Mundo';
                CALL actualizar_lista_vehiculo(listaVehiculoError,2, 1);
                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: ELIMINAR listaVehiculo PROCESO
    -- ============================================================== 
        CREATE PROCEDURE eliminar_lista_vehiculo_proceso()
            BEGIN
                DECLARE listaVehiculoError VARCHAR(30);
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                    SELECT 'Error: Error al eliminar lista de Vehiculo, no se realizó la transacción.';
                END;

                START TRANSACTION;
                
                CALL eliminar_lista_vehiculo(6);

                SET listaVehiculoError = 'Hola Mundo';
                -- CALL eliminar_lista_vehiculo(listaVehiculoError);

                COMMIT;
            END $$

    -- ============================================================== 
    -- TRANSACTION: TODO PODEROSO listaVehiculo 
    -- ============================================================== 
        CREATE PROCEDURE todo_poderoso_lista_vehiculo()
            BEGIN
                
                DECLARE EXIT HANDLER FOR SQLEXCEPTION
                BEGIN
                    ROLLBACK;
                SELECT 'Error: Ha ocurrido un problema con las transacciones de las factura, ninguna operación se realizó.';

                END;

                START TRANSACTION;

                CALL insertar_lista_vehiculo_proceso();
                CALL actualizar_lista_vehiculo_proceso();
                CALL eliminar_lista_vehiculo_proceso();

                COMMIT;
                SELECT 'Transacción de lista de Vehiculos completada con éxito' AS resultado;
                
            END $$
    DELIMITER $$